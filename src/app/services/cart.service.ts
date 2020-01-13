import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { HttpClient } from '@angular/common/http';

const STORAGE_KEY = 'local_cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

    public storeOnLocalStorage(product): void {    
      const currentItemList = this.storage.get(STORAGE_KEY) || [];
      currentItemList.push(product);
      this.storage.set(STORAGE_KEY, currentItemList);
      console.log(this.storage.get(STORAGE_KEY) || 'Local storage is empty');
    }



  addToCart(product) {
    this.items.push(product);
    this.storeOnLocalStorage(product);
    console.log(this.items);
  }

  getItems() {
    return this.storage.get(STORAGE_KEY);
  }

  filterItems(id) {
    const cartItems = this.getItems(); console.log(cartItems);
    const filteredList =  cartItems.filter(e => e.id !== id);
    console.log(filteredList);
    return filteredList;
  }
    
  removeItem(id) {
    const newList = this.filterItems(id);
    return this.storage.set(STORAGE_KEY, newList); 
  }

  clearCart() {
    this.storage.remove(STORAGE_KEY);
    return this.storage.get(STORAGE_KEY);
  }

  totalPrice() {
    const cartItems = this.getItems();
    let i=0;
    for (const item of (cartItems as Array<any>)){
      i = i+item.price;
    }
    return i;
  }
  
}
