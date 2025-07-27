import { Component, effect, inject, input, OnInit } from '@angular/core';
import { IProduct } from '../../../core/interfaces/Iproducts';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';
import { CartService } from '../../services/cart/cart-service';
import { AuthService } from '../../services/auth/auth-service';
import { MessageService } from 'primeng/api';
// import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-card-product-component',
  imports: [CurrencyPipe, RouterLink, FormsModule, Rating],
  templateUrl: './card-product-component.html',
  styleUrl: './card-product-component.scss',
})
export class CardProductComponent implements OnInit {
  private readonly cartService = inject(CartService);
  private readonly authService = inject(AuthService);
  private readonly msg = inject(MessageService);
  test: any = {} as IProduct;
  product = input<IProduct>();
  cartId: string = '';
  rattingValue: number = 0;
  constructor() {
    // effect in any injection context
    effect(() => {
      this.rattingValue = this.product()?.rating.rate ?? 0;
      this.test = this.product();
    });
  }
  ngOnInit(): void {
    this.cartService
      .getSingleCartItem(this.authService.user().id.toString())
      .subscribe({
        next: (res) => {
          console.log(res);
          this.cartId = res.id;
        },
      });
  }
  addToCart() {
    this.cartService
      .addProductToCart({
        id: +this.cartId,
        userId: this.authService.user().id,
        products: this.product() != undefined ? [this.product()] : [this.test],
      })
      .subscribe({
        next: (res) => {
          console.log(res);
          this.msg.add({
            severity: 'success',
            summary: 'success',
            detail: `Add ${res.products[0].title} to your Cart`,
          });
        },
      });
  }
}
