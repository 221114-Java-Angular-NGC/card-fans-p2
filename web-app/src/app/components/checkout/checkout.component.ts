import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderEntry } from 'src/app/models/order-entry.model';
import { Order } from 'src/app/models/order.model';
import { CartEntry } from '../../models/cartentry.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  /**
   * add authentication to check out button - redirect login back to cart?
   * submit order to backend
   */
  cart: CartEntry[] = [];
  subtotal: number = 0;
  shipping = 3.87;
  grandTotal: number = 0;
  user?: User;

  constructor(private cartService: CartService, private userService: UserService) {
    this.cart = this.cartService.Cart;

    for (let entry of this.cart) {
      this.subtotal += entry.total;
    }
    this.grandTotal = this.subtotal + this.shipping;

    this.user = userService.currentUser;
  }

  createOrder() {
    let orderEntry: OrderEntry[] = [];

    this.cartService.Cart.forEach((entry) => {
      orderEntry.push(entry);
    });

    let order: Order = new Order(orderEntry);
  }

  paypalButton(element: any) {
    let orderButton = document.getElementById("order-btn");

    element.textContent = "Having you pay through Paypal...";
    setTimeout(() => {
      element.textContent = "Payment processed!";
      element.className = "btn btn-success";
      orderButton?.removeAttribute("disabled");
    }, 1000)
  }
}
