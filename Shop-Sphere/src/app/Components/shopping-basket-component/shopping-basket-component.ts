import { Component, Inject, inject } from '@angular/core';
import { CartService } from '../../Services/cart-service';
import { PRODUCTS } from '../../Models/products.model';
import { Router } from '@angular/router';




@Component({
  selector: 'app-shopping-basket-component',
  imports: [],
  templateUrl: './shopping-basket-component.html',
  styleUrl: './shopping-basket-component.scss'
})
export class ShoppingBasketComponent {
  cartservice = inject(CartService);
  route = inject(Router)
  cartItem = this.cartservice._cartItem;
  userEmail: string = '';
 

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('loginUser');
      if (user) {
        const userObj = JSON.parse(user);
        this.userEmail = userObj.email || '';
      }
    }

  }

  logOut() {
    this.route.navigate(['/login']);
    localStorage.removeItem('loginUser');
  }

  backtoProduct() {
    this.route.navigate(['/products'])
  }

  deleteProduct(id?: number) {
    this.cartItem.update(items => items.filter(item => item.product.id !== id));
  }

increaseProduct(product: PRODUCTS ) {
  this.cartItem.update(items => items.map(item => 
    item.product.id === product.id
      ? { ...item, quantity: (item.quantity || 1) + 1 }
      : item
  ));
}
}
