import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../products';

@Pipe({
  name: 'productsFilter'
})
export class SearchPipe implements PipeTransform {

  transform(products: any[], filterText: string): any {
    return products ? products.filter(item => item.title.search(new RegExp(filterText, 'i')) > -1) : [];
  }

}
