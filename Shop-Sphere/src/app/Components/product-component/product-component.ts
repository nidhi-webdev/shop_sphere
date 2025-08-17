import { Component, computed, signal, Signal } from '@angular/core';
import { PRODUCTS } from '../../Models/products.model';
import { ProductService } from '../../Services/product-service';



@Component({
  selector: 'app-product-component',
  imports: [],
  templateUrl: './product-component.html',
  styleUrl: './product-component.scss'
})
export class ProductComponent {
  productData: Signal<PRODUCTS[]>
  searchItem = signal('');

  constructor(private productservice: ProductService) {
    this.productData = this.productservice.product;
  }

  // addTocart(product: PRODUCTS) {
  //   this.cartservice.addToCartService(product);
  // }

  filteredProduct = computed(() => {
    const item = this.searchItem().toLowerCase().trim();
    if (!item) return this.productData();
    return this.productData().filter(pro =>
      pro.category.toLowerCase().includes(item) ||
      pro.title.toLowerCase().includes(item)
    );
  });


}
