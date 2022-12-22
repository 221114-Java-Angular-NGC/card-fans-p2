import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartEntry } from './cartentry';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart: CartEntry[];

  constructor(private cartService: CartService) {
    this.cart = this.cartService.Cart;
  }

  // cart: CartEntry[] = [
  //   {prodId: 1, name: 'aviary', image: 'aviary.jpg', quantity: 3, price: 5.99, total: 17.97},
  //   {prodId: 3, name: 'Dark Mode', image: 'darkMode.jpg', quantity: 4, price: 6.99, total: 27.95},
  //   {prodId: 9, name: 'Avengers', image: 'avengers.jpg', quantity: 2, price: 7.99, total: 15.98}];

  removeItem(index: number): void {
    // this.cart.splice(index, 1);
    this.cart = this.cartService.removeFromCart(index);
    this.cartService.Cart = this.cart;
  }

  getGrandTotal(): number {
    let sum: number = 0;
    for (let entry of this.cart) {
      sum += entry.total;
    }
    return sum;
  }

  updateTotal(index: number): void {
    this.cart[index].total = Number(
      (this.cart[index].quantity * this.cart[index].price).toFixed(2)
    );
    this.cartService.Cart = this.cart;
  }
}
