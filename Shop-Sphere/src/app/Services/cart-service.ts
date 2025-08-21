import { Injectable, signal } from '@angular/core';
import { PRODUCTS } from '../Models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public _cartItem = signal<PRODUCTS[]>([]);

  addToCart(product: PRODUCTS) {
    this._cartItem.update(items => [...items, product]);
    // this._cartItem.
  }
}
