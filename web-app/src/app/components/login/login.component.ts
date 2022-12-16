import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { takeWhile } from 'rxjs';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, OnDestroy {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  isComponentAlive = false;

  loginForm = new FormGroup({
    username: new FormControl('', {
      validators: Validators.required,
      updateOn: 'change',
    }),
    password: new FormControl('', {
      validators: Validators.required,
      updateOn: 'change',
    }),
  });

  constructor(private router: Router, public authServ: AuthService) {
    this.isComponentAlive = true;
  }

  ngOnInit(): void {
    this.loginForm
      .get('username')
      ?.valueChanges.pipe(takeWhile(() => this.isComponentAlive))
      .subscribe(() => {
        this.loginForm.get('username')?.updateValueAndValidity();
      });
  }

  ngOnDestroy(): void {
    this.isComponentAlive = false;
  }

  formSubmit(form: FormGroup): void {
    if (form.valid) {
      const { username, password } = form.value;

      this.authServ
        .authenticate(username ?? '', password ?? '')
        .subscribe((response) => {
          if (response) {
            this.router.navigateByUrl('/products');
          } else {
            this.errorMessage = 'User name or password is incorrect';
          }
        });
    } else {
      this.errorMessage = 'Form Data Invalid';
    }
  }
}
