import { HttpClient } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PRODUCTS } from '../Models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  product!: Signal<PRODUCTS[]>
  apiUrl: string = "http://localhost:3000/products";

  constructor(private http: HttpClient) {
    this.product = toSignal(this.http.get<PRODUCTS[]>(this.apiUrl), {initialValue: []});
  }
}
