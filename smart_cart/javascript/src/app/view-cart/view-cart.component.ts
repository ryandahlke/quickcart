import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from "../cart-item";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  cartId = 'abc1234';
  // @Input() cartId: string;
  items: CartItem[] = [];

  constructor(readonly cartService: CartService) { }

  ngOnInit() {

  }

  registerBarcodeScan(upc:string){
    this.cartService.addItem(this.cartId, upc).subscribe((item) => this.items.push(item));
  }

}
