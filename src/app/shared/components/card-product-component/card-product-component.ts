import {
  Component,
  EventEmitter,
  input,
  Input,
  InputSignal,
  Output,
  signal,
  WritableSignal,
} from '@angular/core';
import { IProduct } from '../../../core/interfaces/Iproducts';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card-product-component',
  imports: [CurrencyPipe],
  templateUrl: './card-product-component.html',
  styleUrl: './card-product-component.scss',
})
export class CardProductComponent {
  test: IProduct = {} as IProduct;

  product = input<IProduct>();

  // addToCart(): void {}
  // getStarArray(rating: number): number[] {
  //   return Array(Math.floor(rating)).fill(0);
  // }

  // product01: IProduct = {
  //   id: 1,
  //   title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  //   price: 109.95,
  //   description:
  //     'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  //   category: "men's clothing",
  //   image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  //   rating: {
  //     rate: 3.9,
  //     count: 120,
  //   },
  // };
}
