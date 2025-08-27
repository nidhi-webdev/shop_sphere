import { Injectable, signal } from '@angular/core';
import { CARTPRODUCT, PRODUCTS } from '../Models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public _cartItem = signal<CARTPRODUCT[]>([]);

  addToCart(product: PRODUCTS) {
   const items = this._cartItem();
  const existing = items.find(item => item.product.id === product.id);

  if(existing) {
    this._cartItem.update(items => 
      items.map(item => 
        item.product.id === product.id ? 
        { ...item, quantity: item.quantity + 1} : item
      )
    );
  } else {
    this._cartItem.update(items => 
    [ ...items, {product, quantity: 1}]
    );
  }
  }
}
