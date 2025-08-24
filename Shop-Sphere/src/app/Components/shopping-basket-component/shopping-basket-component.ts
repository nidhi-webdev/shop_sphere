import { Component, Inject, inject } from '@angular/core';
import { CartService } from '../../Services/cart-service';
import { PRODUCTS } from '../../Models/products.model';


@Component({
  selector: 'app-shopping-basket-component',
  imports: [],
  templateUrl: './shopping-basket-component.html',
  styleUrl: './shopping-basket-component.scss'
})
export class ShoppingBasketComponent {
  cartservice = inject(CartService);
  cartItem = this.cartservice._cartItem;
}
