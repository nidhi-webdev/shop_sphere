import { Component, computed, OnInit, signal, Signal } from '@angular/core';
import { PRODUCTS } from '../../Models/products.model';
import { ProductService } from '../../Services/product-service';
import { Router } from '@angular/router';
import { CartService } from '../../Services/cart-service';
import { NavBarComponent } from '../../shared/nav-bar-component/nav-bar-component'



@Component({
  selector: 'app-product-component',
  imports: [NavBarComponent],
  templateUrl: './product-component.html',
  styleUrl: './product-component.scss'
})
export class ProductComponent {
  productData: Signal<PRODUCTS[]>
  searchItemProduct = signal('');


  constructor(private productservice: ProductService,
    private route: Router, private cartservice: CartService
  ) {
    this.productData = this.productservice.product;
  }

  filteredProduct = computed(() => {
    const item = this.searchItemProduct().toLowerCase().trim();
    if (!item) return this.productData();
    return this.productData().filter(pro =>
      pro.category.toLowerCase().includes(item) ||
      pro.title.toLowerCase().includes(item)
    );
  });

  sendingProductData(product: PRODUCTS) {
    this.cartservice.addToCart(product);
  }
}
