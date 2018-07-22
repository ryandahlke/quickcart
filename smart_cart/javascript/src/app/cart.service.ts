import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs/index";
import {CartItem} from "./cart-item";
import {Cart} from "./cart";
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(readonly http: HttpClient) { }

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
    let endpoint = `/cart/${cartId}`;
    return this.http.get(endpoint).pipe(map((result) => new Cart(result)));
  }

}
