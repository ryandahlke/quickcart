import {Component, AfterViewInit, OnDestroy, Output, EventEmitter, ViewChild} from '@angular/core';
import * as Quagga from 'quagga';
import {Subject} from "rxjs/index";
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements AfterViewInit, OnDestroy {
  private configObject;
  readonly audio: HTMLAudioElement;
  readonly failureThreshhold = .105;

  private lastResult;

  @Output() scan: EventEmitter<any> = new EventEmitter();
  debouncer = new Subject<string>();

  constructor() {
    this.audio = new Audio();

    this.debouncer.pipe(
      debounceTime(1000)
    ).subscribe(
      (value: string) => { this.scan.emit(value)}
    );


  }

  ngAfterViewInit() {
    let scanner = document.querySelector('#scanner');
    let height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * .4;
    this.configObject = {
      inputStream: {
        type: "LiveStream",
        constraints: {
          facingMode: "environment", // or user,
          width: scanner.clientWidth,
          height: height
        },
        target: scanner
      },
      locator: {
        patchSize: "large",
        halfSample: false,
      },
      frequency: 30,
      decoder: {
        readers: [
          'upc_reader'
        ],
        debug: {
          drawBoundingBox: true,
          showFrequency: true,
          drawScanline: true,
          showPattern: true
        },
        multiple: false
      },
      locate: true
    };
    this.initializeQuagga();
    this.audio.src = "./assets/beep.mp3";
    this.audio.load();
  }

  initializeQuagga() {
    let self = this;

    Quagga.init(
      this.configObject,
      function (err) {
        if (err) {
          console.log(err);
          return
        }

        Quagga.onDetected((result) => {
          if (!result.codeResult) {
            return;
          }

          let code = result.codeResult.code;

          if (self.lastResult !== code) {
            let countDecodedCodes = 0;
            let err = 0;

            result.codeResult.decodedCodes.forEach((decodedCode) => {
              if (decodedCode.error != undefined) {
                countDecodedCodes++;
                err += parseFloat(decodedCode.error);
              }
            });

            if (err / countDecodedCodes < self.failureThreshhold) {
              console.log("success!");
              console.log(err / countDecodedCodes);
              self.beep();
              self.debouncer.next(result.codeResult.code);
            } else {
              console.log(err / countDecodedCodes);
              console.log("Code: " + code.toString());
            }
          }

        });

        Quagga.start();
        document.querySelector('#scanner canvas').outerHTML = '';
      }
    );


  }
  beep(){
    this.audio.play();
  }

  ngOnDestroy(){
    Quagga.stop();
  }

}
