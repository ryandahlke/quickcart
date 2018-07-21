import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ScannerComponent } from './scanner/scanner.component';
import { WindowComponent } from './window/window.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { SelectCartComponent } from './select-cart/select-cart.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { CheckoutCartComponent } from './checkout-cart/checkout-cart.component';
import { AppRoutingModule } from './app-routing.module';
import { Debouncer } from './debouncer'

@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    MenuComponent,
    ScannerComponent,
    CartComponent,
    SelectCartComponent,
    ViewCartComponent,
    CheckoutCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    Debouncer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
