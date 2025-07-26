import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../../core/interfaces/Iproducts';

@Pipe({
  name: 'searchProduct',
})
export class SearchProductPipe implements PipeTransform {
  transform(products: IProduct[], searchTerms: string[]): IProduct[] {
    if (!searchTerms.length) return products;

    return products.filter((prod) =>
      searchTerms.some((term) =>
        prod.title.toLowerCase().includes(term.toLowerCase())
      )
    );
  }
}
