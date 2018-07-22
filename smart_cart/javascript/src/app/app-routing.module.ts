import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SelectCartComponent} from './select-cart/select-cart.component'
import { ViewCartComponent} from "./view-cart/view-cart.component";


const routes: Routes = [
  {
    path: 'select-cart',
    component: SelectCartComponent
  },
  {
    path: 'view-cart',
    component: ViewCartComponent
  },
  { path: '',
    redirectTo: 'select-cart',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
