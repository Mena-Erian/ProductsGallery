import { Component, effect, input } from '@angular/core';
import { IProduct } from '../../../core/interfaces/Iproducts';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
  selector: 'app-card-product-component',
  imports: [CurrencyPipe, RouterLink, FormsModule, Rating],
  templateUrl: './card-product-component.html',
  styleUrl: './card-product-component.scss',
})
export class CardProductComponent {
  test: IProduct = {} as IProduct;
  product = input<IProduct>();

  rattingValue: number = 0;

  constructor() {
    // effect in any injection context
    effect(() => {
      this.rattingValue = this.product()?.rating.rate ?? 0;
    });
  }
}
