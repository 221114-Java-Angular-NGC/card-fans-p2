import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { takeWhile } from 'rxjs';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'register-form',

  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit, OnDestroy {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  isComponentAlive = false;

  registerForm = new FormGroup({
    username: new FormControl('', {
      validators: Validators.required,
      updateOn: 'change',
    }),
    password: new FormControl('', {
      validators: Validators.required,
      updateOn: 'change',
    }),
  });

  constructor(
    private router: Router,
    private authServ: AuthService,
    public activeModal: NgbActiveModal
  ) {
    this.isComponentAlive = true;
  }

  ngOnInit(): void {
    this.registerForm
      .get('username')
      ?.valueChanges.pipe(takeWhile(() => this.isComponentAlive))
      .subscribe(() => {
        this.registerForm.get('username')?.updateValueAndValidity();
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
            this.activeModal.close();
          } else {
            this.errorMessage = 'User name or password is incorrect';
          }
        });
    } else {
      this.errorMessage = 'Form Data Invalid';
    }
  }
}
