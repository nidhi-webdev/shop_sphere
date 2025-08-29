import { Injectable, signal } from '@angular/core';
import { CARTPRODUCT, PRODUCTS } from '../Models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public _cartItem = signal<CARTPRODUCT[]>(this.loadCartFromStorage());

  addToCart(product: PRODUCTS) {
    const items = this._cartItem();
    const existing = items.find(item => item.product.id === product.id);

    if (existing) {
      this._cartItem.update(items =>
        items.map(item =>
          item.product.id === product.id ?
            { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      this._cartItem.update(items =>
        [...items, { product, quantity: 1 }]
      );
    }
    this.saveCartToStorage();
  }

  saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(this._cartItem()));
  }

  loadCartFromStorage(): CARTPRODUCT[] {
    const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) as CARTPRODUCT[] : [];
  }

  deleteProduct(id?: number) {
    this._cartItem.update(items => items.filter(item => item.product.id !== id));
    this.saveCartToStorage();
  }

  increaseProduct(product: PRODUCTS) {
    this._cartItem.update(items => items.map(item =>
      item.product.id === product.id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    ));
    this.saveCartToStorage();
  }

  decreaseProduct(product: PRODUCTS) {
    this._cartItem.update(items => items.map(item => 
     item.product.id === product.id ? { ...item, quantity: item.quantity - 1} : item
    ).filter(item => item .quantity > 0)
  );
    this.saveCartToStorage();
  }

}
