import { Injectable } from '@angular/core';
import { withInMemoryScrolling } from '@angular/router';
import { CartEntry } from 'src/app/components/cart/cartentry';
import { PRODUCTS } from 'src/app/models/mock.products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart$: CartEntry[] = [];

  get Cart() {
    return this.cart$;
  }

  set Cart(newCart: CartEntry[]) {
    this.cart$ = Object.assign({}, ...newCart);
  }
  constructor() { }

  addToCart(id: number): void{
    //check if the product is already in the cart
    //only checks if the cart isn't empty
    if (this.cart$.length != 0) {
      for (let entry of this.cart$) {
        //updates quantity and total when it finds a product with the same id
        if (entry.prodId == id ) {
          entry.quantity += 1;
          entry.total = entry.price * entry.quantity;
          return;
        }
      }
    }

    //get product entry by from the server and add it to the cart
    //for now we're using mock product
    let productList = PRODUCTS;
    for(let product of productList) {
      if (product.productId == id) {
        this.cart$.push({
          prodId: id,
          name: product.productName,
          image: product.pic,
          quantity: 1,
          price: product.price,
          total: product.price
        })
      }
    }

  }

  removeFromCart(index: number): CartEntry[]{
    this.cart$.splice(index, 1);
    return this.cart$;
  }
    
}
