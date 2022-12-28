import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderEntry } from 'src/app/models/order-entry.model';
import { Order } from 'src/app/models/order.model';
import { RestDataSource } from 'src/app/services/rest.datasource';
import { CartEntry } from '../cart/cartentry';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  /**
   * add authentication to check out button
   * disable check out button until paypal button is pressed
   * autofill user info
   * add routing guard to this page
   */
  cart: CartEntry[] = [];
  subtotal: number = 0;
  shipping = 3.87;
  grandTotal: number = 0;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.Cart;
    for (let entry of this.cart) {
      this.subtotal += entry.total;
    }
    this.grandTotal = this.subtotal + this.shipping;
  }

  createOrder() {
    let orderEntry: OrderEntry[] = [];

    this.cartService.Cart.forEach((entry) => {
      orderEntry.push(entry);
    });

    let order: Order = new Order(orderEntry);
  }
}
