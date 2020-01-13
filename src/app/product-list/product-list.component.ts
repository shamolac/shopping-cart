import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../products';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ ProductsService]
})
export class ProductListComponent implements OnInit {
  products: Product[];

  config: any;
  p: number = 1;

  constructor(
  	private productsService: ProductsService,
  	private httpClient: HttpClient
  ) {
      this.products = this.productsService.getProducts();
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.products.length
      };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  ngOnInit() {
  }

}
