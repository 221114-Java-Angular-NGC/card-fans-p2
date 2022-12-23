import { Component } from '@angular/core';
import { PRODUCTS } from 'src/app/models/mock.products';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredProducts: Product[] = [
    PRODUCTS[0],
    PRODUCTS[1],
    PRODUCTS[2]
  ]
}
