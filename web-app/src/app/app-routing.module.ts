import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  //www.google.com/home   path == /home
  {
      path: '/home',  
      //component: home
  },
  {
      path: '/login',
    //  component: login
  },
  {
      path: '/register',
    //  component: register
  },
  
  {
    path: '/profile',
    //component: profile
  },

  {
    path: '/products',
    //component: products
  },

  {
    path: '/cart',
    //component: cart
  },

  {
    path: '/checkout',
    //component: checkout
  },

  {
    path: '/confirmation',
    //component: confirmation
  },



]
@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
