import { Component, computed, Input, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-component',
  imports: [],
  templateUrl: './nav-bar-component.html',
  styleUrl: './nav-bar-component.scss'
})
export class NavBarComponent {
userEmail: string = '';
@Input() searchItem = signal('');



 constructor(private route: Router) {}

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

  
}
