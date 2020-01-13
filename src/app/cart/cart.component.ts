import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ CartService ]
})
export class CartComponent implements OnInit {
	items;
	localItems = [];
	totalPrice;
	totalQty;

  constructor(
    private cartService: CartService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  goShopping() {
     this.router.navigate(['product-list']);
  }

  removeItem(id) {
    this.cartService.removeItem(id);
    this.ngOnInit();
  }
  
  clearCart() {
    this.cartService.clearCart();
  }

  ngOnInit() {
    this.items = this.cartService.getItems(); 
    this.localItems = this.cartService.getItems(); 
    this.totalPrice = this.cartService.totalPrice(); 
    console.log(this.items);
  }
}
