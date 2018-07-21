import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WindowComponent } from './window/window.component';
import { MenuComponent } from './menu/menu.component';
import { ScannerComponent } from './scanner/scanner.component';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
