import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs/index";
import {CartItem} from "./cart-item";
import {Cart} from "./cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCurrentCartId(){
    return window.localStorage.getItem('cart') || 'abcd1234';
  }

  setCurrentCartId(cartId: string){
    window.localStorage.setItem('cart', cartId)
  }

  addItem(cartId: string, upc: string): Observable<CartItem>{
    return of(
      new CartItem(upc, 'https://loremflickr.com/320/240', `My fancy product ${upc}`)
    )
  }

  getCart(cartId: string): Observable<Cart>{
    return of(
      new Cart({
        _id: 'abcd1234',
        items: [
          {
            'upc': '987654321',
            'imageUrl': 'https://loremflickr.com/320/240',
            'description': `Fancy product 987654321`
          },
          {
            'upc': '123456789',
            'imageUrl': 'https://loremflickr.com/320/240',
            'description': `Fancy product 123456789`
          },
        ]
      })
    )
  }

}
