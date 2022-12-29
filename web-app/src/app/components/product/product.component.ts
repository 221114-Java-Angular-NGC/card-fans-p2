import { Component } from '@angular/core';
import { PRODUCTS } from '../../models/mock.products';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartEntry } from '../cart/cartentry';
import { RestDataSource } from 'src/app/services/rest.datasource';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  cart: CartEntry[];
  products: Product[] = PRODUCTS;

  constructor(
    private cartService: CartService,
    private restDataSource: RestDataSource
  ) {
    this.cart = this.cartService.Cart;
    this.restDataSource.getProducts().subscribe((x) => {
      this.products = x;
    });
  }

  addCart(prodId: number) {
    this.cartService.addToCart(prodId);
  }
}
