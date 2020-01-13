import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../products';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ProductsService]
})
export class SearchComponent implements OnInit {
  @Input() searchModel;
  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  updateSearchModel(value) {
    this.searchModel = value;
    this.searchModelChange.emit(this.searchModel);
  }
}
