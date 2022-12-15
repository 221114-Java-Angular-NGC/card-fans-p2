import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username?: string;
  password?: string;
  errorMessage?: string;

  constructor(private router: Router) {}

  authenticate(form: NgForm) {
    if (form.valid) {
      //check username and password
    }
  }
}
