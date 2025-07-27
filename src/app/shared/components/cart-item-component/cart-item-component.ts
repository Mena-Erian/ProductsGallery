import {
  Component,
  effect,
  inject,
  input,
  InputSignal,
  OnInit,
  output,
  signal,
  WritableSignal,
} from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IProduct } from '../../../core/interfaces/Iproducts';
import { ICart, IProductMetaData } from '../../../core/interfaces/ICart';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart/cart-service';
import { ProductService } from '../../services/product/product-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-item-component',
  imports: [ButtonModule, FormsModule, CurrencyPipe],
  templateUrl: './cart-item-component.html',
  styleUrl: './cart-item-component.scss',
})
export class CartItemComponent implements OnInit {
  private readonly cartService = inject(CartService);
  private readonly productService = inject(ProductService);
  constructor() {
    effect(() => console.log(this.prdouctMetaData()));
  }
  product: WritableSignal<IProduct> = signal<IProduct>({} as IProduct);
  prdouctMetaData: InputSignal<IProductMetaData> = input(
    {} as IProductMetaData
  );
  sendToRemoveCartItem = output<number>();
  ngOnInit(): void {
    this.getProductById(this.prdouctMetaData().productId.toString());
  }
  getProductById(ProductId: string) {
    this.productService.getSingleProduct(ProductId).subscribe({
      next: (res) => {
        console.log(res);
        this.product.set(res);
      },
    });
  }
  decreaseQuantity() {
    if (this.prdouctMetaData().quantity > 1) {
      this.prdouctMetaData().quantity -= 1;
    }
  }
  increaseQuantity() {
    if (this.prdouctMetaData().quantity <= 50) {
      this.prdouctMetaData().quantity += 1;
    }
  }
  updateQuantity(productQuantity: number) {
    this.prdouctMetaData().quantity =
      productQuantity > 50 ? 50 : productQuantity;
  }
  removeItemFromCart() {
    this.sendToRemoveCartItem.emit(this.prdouctMetaData().productId);
  }
}
