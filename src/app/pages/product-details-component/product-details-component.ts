import { CurrencyPipe } from '@angular/common';
import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { ProductService } from '../../shared/services/product/product-service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../core/interfaces/Iproducts';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
  selector: 'app-product-details-component',
  imports: [CurrencyPipe, FormsModule, Rating],
  templateUrl: './product-details-component.html',
  styleUrl: './product-details-component.scss',
})
export class ProductDetailsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);
  productDetails: WritableSignal<IProduct | null> = signal<IProduct | null>(
    null
  );
  productId: string = '';
  rattingValue: number = 0;
  ngOnInit(): void {
    this.getProductDetails();
  }

  getParamProductId(): string {
    this.activatedRoute.paramMap.subscribe({
      next: (paramId) => {
        this.productId = paramId.get('productId') ?? '';
      },
      error: (err) => {
        console.error(err);
      },
    });
    return this.productId;
  }
  getProductDetails(): void {
    this.productService.getSingleProduct(this.getParamProductId()).subscribe({
      next: (res) => {
        this.productDetails.set(res);
        this.rattingValue = this.productDetails()?.rating.rate ?? 0;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
