import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScannerComponent } from './scanner/scanner.component';
import { WindowComponent } from './window/window.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { SelectCartComponent } from './select-cart/select-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    MenuComponent,
    ScannerComponent,
    CartComponent,
    SelectCartComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }