import { Routes } from '@angular/router';
import { ProductComponent } from './Components/product-component/product-component';
import { LoginComponent } from './Components/login-component/login-component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
     { path: 'login', component: LoginComponent },

    { path: 'products', component: ProductComponent }
];
