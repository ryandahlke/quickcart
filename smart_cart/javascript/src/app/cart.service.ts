import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs/index";
import {CartItem} from "./cart-item";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addItem(cartId: string, upc: string): Observable<CartItem>{
    return of(
      new CartItem(upc, 'https://picsum.photos/200/300', 'My fancy product')
    )
  }
}
