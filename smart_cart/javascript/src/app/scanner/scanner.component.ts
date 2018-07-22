import {Component, AfterViewInit} from '@angular/core';
import * as Quagga from 'quagga';
import {Debouncer} from '../debouncer'

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements AfterViewInit {
  readonly configObject;
  private onDetected;
  private audio;

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

    this.onDetected = debouncer.debounce(this.processResult, 1000);
  }

  ngAfterViewInit() {
    this.initializeQuagga();
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

        Quagga.onDetected(self.onDetected);

        Quagga.start();
      }
    );
  }

  processResult(result){
    if (result && result.codeResult) {
      this.audio = new Audio();
      this.audio.src = "./assets/beep.mp3";
      this.audio.load();
      this.audio.play();
    }
  }
}
