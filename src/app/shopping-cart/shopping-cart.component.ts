import { Component,Input, Output, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../shared/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartProductList: Product[]=[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartProductList = this.cartService.getCartProductList();
    console.log(this.cartProductList);
  }

  updateCartItem(product: Product){
    const cartProduct = this.cartProductList.find(({ name }) => name === product.name);
    if (cartProduct) {
      cartProduct.num = product.num;
      console.log("quantity updated", cartProduct.num)
      cartProduct.price =  (cartProduct.price ?? 0)* (cartProduct.num ?? 0); // update the price according to the quantity
      console.log("price updated", cartProduct.price);
      // this.cartService.setCartProductList(this.cartProductList);
    }
  }

}
