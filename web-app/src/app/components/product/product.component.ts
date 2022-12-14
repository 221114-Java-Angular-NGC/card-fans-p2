import { Component } from '@angular/core';
import { PRODUCTS } from '../../models/mock.products';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


products: Product[] = PRODUCTS;
constructor () {}




}
