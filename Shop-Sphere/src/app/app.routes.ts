import { Routes } from '@angular/router';
import { ProductComponent } from './Components/product-component/product-component';
import { LoginComponent } from './Components/login-component/login-component';
import { ShoppingBasketComponent } from './Components/shopping-basket-component/shopping-basket-component';
import { CheckoutComponent } from './Components/checkout-component/checkout-component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
     { path: 'login', component: LoginComponent },

    { path: 'products', component: ProductComponent },

    {path: 'shoppingBasket', component: ShoppingBasketComponent},

    {path: 'checkout', component: CheckoutComponent},
];
