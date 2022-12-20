import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { PRODUCTS } from '../../models/mock.products';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  allProducts: Product[] = PRODUCTS;
}
