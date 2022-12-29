import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartEntry } from '../../models/cartentry.model';
import { ProductPopupComponent } from '../product-popup/product-popup.component';
import { RestDataSource } from 'src/app/services/rest.datasource';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() products: Product[] = [];
  cart: CartEntry[];

  constructor(
    private cartService: CartService,
    private modalService: NgbModal,
    private restDataSource: RestDataSource
  ) {
    this.cart = this.cartService.Cart;
    this.restDataSource.getProducts().subscribe((x) => {
      this.products = x;
    });
  }

  addCart(index: number) {
    let prod = {
      prodId: this.products[index].productId,
      name: this.products[index].productName,
      image: this.products[index].imgUrl ?? '',
      quantity: 1,
      price: this.products[index].price,
      total: this.products[index].price,
    };

    this.cartService.addToCart(prod);
  }

  cartButtonPress(event: any) {
    let element = event.target;
    event.stopPropagation();

    element.textContent = 'Added!';
    element.className = 'btn btn-dark';
    setTimeout(() => {
      element.textContent = 'Add to Cart';
      element.className = 'btn btn-danger';
    }, 1000);
  }

  openModal(index: number) {
    this.modalService.open(ProductPopupComponent);
  }
}
