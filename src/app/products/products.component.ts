import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product: Product[]=[];
  page: number = 1;

  cartProductList:Product[] = [];

  // products = new Array(20);
  constructor(
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProduct(this.page).subscribe((product: Product[]) => {
      this.product = product;
    })
  }

  onScroll(): void {
    this.productService.getProduct(++this.page).subscribe((product: Product[]) => {
      this.product.push(...product);
    })
  }

  // addToCart(product:Product) {
  //   console.log("Product list",this.product);
  //   // console.log("product 2", this.product)
  //   const productInCart = this.product.find(({name})=> name === product.name);
  //   // const productInCart = this.cartProductList.find((p) => p.name === product.name);
  //   console.log("product being searched for:", product); 
  //   console.log("cart product",productInCart);
  //   if(!productInCart){
  //     this.cartProductList.push({...product, num:1});
  //     // return;
  //   }
  //   else{
  //     // productInCart.num += 1;
  //     productInCart.num = (productInCart.num ?? 0) + 1;
  //     console.log("product count", productInCart.num);
  //   }
  //   console.log("cart all product",productInCart);

  // }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

}
