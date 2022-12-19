import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './components/product/product.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RestDataSource } from './services/rest.datasource';
import { AuthService } from './services/authentication/auth.service';
import { NgbdModalComponent } from './components/modal/popup-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { MockDataSource } from './services/mock.datasource';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NgbdModalComponent,

    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CartComponent,
    CheckoutComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    RestDataSource,
    MockDataSource,
    //Mocking RestDataSource, replace MockDataSource
    //with RestDataSource when using actual backend api
    { provide: RestDataSource, useClass: MockDataSource },
    //{ provide: RestDataSource, useClass: RestDataSource }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
