import {Component, AfterViewInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import * as Quagga from 'quagga';
import {Subject} from "rxjs/index";
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements AfterViewInit, OnDestroy {
  readonly configObject;
  readonly audio: HTMLAudioElement;
  readonly failureThreshhold = .1;

  private lastResult;

  @Output() scan: EventEmitter<any> = new EventEmitter();
  debouncer = new Subject<string>();

  constructor() {
    this.audio = new Audio();

    this.configObject = {
      inputStream: {
        type: "LiveStream",
        constraints: {
          facingMode: "environment", // or user,
        },
        target: '#scanner'
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

    this.debouncer.pipe(
      debounceTime(1000)
    ).subscribe(
      (value: string) => { this.scan.emit(value)}
    );


  }

  ngAfterViewInit() {
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
              self.beep();
                  self.debouncer.next(result.codeResult.code);

            } else {
              console.log(err / countDecodedCodes);
              console.log("Code: " + code.toString());
            }
          }

        });

        Quagga.start();
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
