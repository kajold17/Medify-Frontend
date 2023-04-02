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

}
