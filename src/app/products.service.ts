import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PRODUCTS } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    for (let prod of (PRODUCTS as Array<any>)){
      let image_url = prod.image_url;
      prod.image_url = image_url.replace("x.png", "200.png");
    }
    return PRODUCTS;
  }

}
