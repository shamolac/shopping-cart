import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Top Movies';
  products: any = [];

constructor(
  private httpClient: HttpClient
) {}
  ngOnInit(){

  }
}