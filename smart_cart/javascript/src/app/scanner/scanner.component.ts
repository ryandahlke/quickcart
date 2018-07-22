import {Component, AfterViewInit, Output, EventEmitter} from '@angular/core';
import * as Quagga from 'quagga';
import {Debouncer} from '../debouncer'

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements AfterViewInit {
  readonly configObject;
  readonly debouncer;
  readonly audio: HTMLAudioElement;

  @Output() scan: EventEmitter<any> = new EventEmitter();

  constructor(debouncer: Debouncer) {
    this.configObject = {
      inputStream: {
        type: "LiveStream",
        constraints: {
          facingMode: "environment", // or user,
        },
        target: '#scanner'
      },
      locator: {
        patchSize: "medium",
        halfSample: false,
      },
      frequency: 10,
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
    this.debouncer = debouncer;

    this.audio = new Audio()
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

      Quagga.onDetected(
        self.debouncer.debounce((result)=>{
          if (result && result.codeResult) {
            self.beep();
            self.scan.emit(result);
          }
        })
      );

        Quagga.start();
      }
    );
  }
  beep(){
    this.audio.play();
  }

}
