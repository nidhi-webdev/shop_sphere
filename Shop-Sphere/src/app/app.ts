import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './Components/product-component/product-component';
// import { RouterOutlet } from "../../node_modules/@angular/router/router_module.d";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [ProductComponent, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Shop-Sphere');
}
