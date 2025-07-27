import {
  Component,
  inject,
  input,
  InputSignal,
  OnInit,
  signal,
} from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IProduct } from '../../../core/interfaces/Iproducts';
import { ICart, IProductMetaData } from '../../../core/interfaces/ICart';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart/cart-service';
import { ProductService } from '../../services/product/product-service';

@Component({
  selector: 'app-cart-item-component',
  imports: [ButtonModule, FormsModule],
  templateUrl: './cart-item-component.html',
  styleUrl: './cart-item-component.scss',
})
export class CartItemComponent implements OnInit {
  private readonly cartService = inject(CartService);
  private readonly productService = inject(ProductService);

  cartItem = signal<ICart>({} as ICart);
  prdouctMetaData: InputSignal<IProductMetaData> = input(
    {} as IProductMetaData
  );
  ngOnInit(): void {
    this.getProductById('1');
  }
  getProductById(ProductId: string) {
    this.productService.getSingleProduct(ProductId).subscribe({});
  }
}
