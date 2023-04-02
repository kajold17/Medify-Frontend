import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { PRODUCT_SET } from '../shared/product-sets';
import { Observable, of } from 'rxjs';
// import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProduct(page: number): Observable<Product[]>{
    // return PRODUCT_SET;
    const products = PRODUCT_SET.slice((page - 1) * 10, page * 10);
    return of(products);
  }
}
