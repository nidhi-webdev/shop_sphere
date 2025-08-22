import { Component, computed, OnInit, signal, Signal } from '@angular/core';
import { PRODUCTS } from '../../Models/products.model';
import { ProductService } from '../../Services/product-service';
import { Router } from '@angular/router';
import { CartService } from '../../Services/cart-service';



@Component({
  selector: 'app-product-component',
  imports: [],
  templateUrl: './product-component.html',
  styleUrl: './product-component.scss'
})
export class ProductComponent implements OnInit {
  productData: Signal<PRODUCTS[]>
  searchItem = signal('');
  userEmail: string = '';
  count = 0;


  constructor(private productservice: ProductService,
    private route: Router, private cartservice: CartService
  ) {
    this.productData = this.productservice.product;
  }

  filteredProduct = computed(() => {
    const item = this.searchItem().toLowerCase().trim();
    if (!item) return this.productData();
    return this.productData().filter(pro =>
      pro.category.toLowerCase().includes(item) ||
      pro.title.toLowerCase().includes(item)
    );
  });

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

  shoppingBasket() {
    this.route.navigate(['/shoppingBasket'])
  }

  sendingProductData(product: PRODUCTS) {
    this.count++;
    this.cartservice.addToCart(product);
    //  console.log("From the Product", this.cartservice)
  }

}
