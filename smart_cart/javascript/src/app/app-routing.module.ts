import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SelectCartComponent} from './select-cart/select-cart.component'
import {ScannerComponent} from "./scanner/scanner.component";

const routes: Routes = [
  {
    path: 'select-cart',
    component: SelectCartComponent
  },
  { path: '',
    redirectTo: 'select-cart',
    pathMatch: 'full'
  },
  {
    path: 'scanner',
    component: ScannerComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
