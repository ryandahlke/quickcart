import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScannerComponent } from './scanner/scanner.component';
import { Debouncer } from './debouncer'

@NgModule({
  declarations: [
    AppComponent,
    ScannerComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    Debouncer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
