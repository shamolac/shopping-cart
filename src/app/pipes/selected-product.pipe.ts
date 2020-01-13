import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../products';
@Pipe({
    name: 'selectedProduct'
})
export class SelectedProductPipe implements PipeTransform {
    transform(allProducts: Product[], productId: string): any {
        return allProducts.filter(product => product.id === productId);
    }
}