import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../products';
import {  Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsService } from '../products.service';
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [ ProductsService, CartService ]
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  private id: string;
  products: Product[];
  private sub: any;

  prodIdSnapshot: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private cartService: CartService
  ) { 
      this.products = productsService.getProducts();
    }

  gotoCart(product) { 
    this.cartService.addToCart(product);
    this.router.navigate(['/cart']);
  }

  ngOnInit() {    
    this.sub = this.route.params.subscribe(params => {
        this.id = params['id'];
    });
  }
  ngOnDestroy() {
	this.sub.unsubscribe();
  }
}
