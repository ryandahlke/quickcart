import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from "../cart-item";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  cartId: string;
  // @Input() cartId: string;
  items: CartItem[] = [];

  constructor(readonly cartService: CartService) { }

  ngOnInit() {
    this.cartId = this.cartService.getCurrentCartId();
    this.cartService.getCart(this.cartId).subscribe((cart)=> this.items.push(...cart.cartItems));
  }

  registerBarcodeScan(upc:string){
    this.cartService.addItem(this.cartId, upc).subscribe((item) => this.items.push(item));
  }

}
