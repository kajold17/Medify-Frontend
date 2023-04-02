import { Injectable } from '@angular/core';
import { Product } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProductList: Product[] = [];
  product: Product[]=[];
  constructor() { }

  addToCart(product:Product) {
    // console.log("Product list",this.product);
    // console.log("product 2", this.product)
    const productInCart = this.cartProductList.find(({name})=> name === product.name);
    // const productInCart = this.cartProductList.find((p) => p.name === product.name);
    console.log("product being searched for:", product); 
    console.log("cart product",productInCart);
    if(!productInCart){
      this.cartProductList.push({...product, num:1});
    }
    else{
      productInCart.num = (productInCart.num ?? 0) + 1;
      // productInCart.price = (productInCart.price ?? 0),
      console.log("product count", productInCart.num);
      console.log("product price", productInCart.price);
    }
    console.log("cart all product",this.cartProductList);

  }

  getCartProductList() {
    return this.cartProductList;
  }
  
}
