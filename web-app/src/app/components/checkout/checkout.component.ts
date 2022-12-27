import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderEntry } from 'src/app/models/order-entry.model';
import { Order } from 'src/app/models/order.model';
import { RestDataSource } from 'src/app/services/rest.datasource';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  constructor(private cartService: CartService) {}

  createOrder() {
    let orderEntry: OrderEntry[] = [];

    this.cartService.Cart.forEach((entry) => {
      orderEntry.push(entry);
    });

    let order: Order = new Order(orderEntry);
  }
}
