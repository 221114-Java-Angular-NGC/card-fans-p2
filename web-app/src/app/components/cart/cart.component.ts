import { Component } from '@angular/core';
import { CartEntry } from './cartentry';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: CartEntry[] = [{name: 'aviary', image: 'aviary.jpg', quantity: 3, price: 5.99, total: 17.97}, 
  {name: 'Dark Mode', image: 'darkMode.jpg', quantity: 4, price: 6.99, total: 27.95},
  {name: 'Avengers', image: 'avengers.jpg', quantity: 2, price: 7.99, total: 15.98}];

}
