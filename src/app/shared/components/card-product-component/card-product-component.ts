import { Component, input } from '@angular/core';
import { IProduct } from '../../../core/interfaces/Iproducts';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
// import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card-product-component',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './card-product-component.html',
  styleUrl: './card-product-component.scss',
})
export class CardProductComponent {
  test: IProduct = {} as IProduct;
  product = input<IProduct>();
}
