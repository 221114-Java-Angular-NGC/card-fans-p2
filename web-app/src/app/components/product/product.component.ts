import { Component, Input } from '@angular/core';

import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartEntry } from '../cart/cartentry';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() products: Product[] = [];
  cart: CartEntry[];
  

  constructor(private cartService: CartService) {
      this.cart = this.cartService.Cart;
  }

  addCart (prodId: number) {
    this.cartService.addToCart(prodId);
  }

  cartButtonPress (element: any) {
    element.textContent = "Added!";
    element.className = "btn btn-dark";
    setTimeout(() => {
      element.textContent = "Add to Cart";
      element.className = "btn btn-danger";
    }, 1000);
  }
}
