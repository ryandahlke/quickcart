import { Component, OnInit } from '@angular/core';
import {CartItem} from "../cart-item";

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  items: CartItem[] = [];

  constructor() { }

  ngOnInit() {

  }

  registerBarcodeScan(upc:string){
    let cartItem = new CartItem(upc);
    this.items.push(cartItem)
  }

}
