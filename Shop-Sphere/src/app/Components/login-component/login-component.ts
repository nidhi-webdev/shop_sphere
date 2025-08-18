import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { LOGIN } from '../../Models/login.model';
import { LoginService } from '../../Services/login-service';


@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss'
})
export class LoginComponent {

  myForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private loginservice: LoginService) {}


  submit() {
  if(this.myForm.valid) {
    const userBody: LOGIN = {
      id: 0,
      email: this.myForm.value.email || '',
      password: this.myForm.value.password || '',
    };

    this.loginservice.userLogin(userBody).subscribe({
      next: (res) => {
        alert("login Successful")
      } ,
      error: (err) => {
        alert("Invalid User")
      }
    })
  }
  }
}
