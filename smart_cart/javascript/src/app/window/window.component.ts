import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class WindowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
