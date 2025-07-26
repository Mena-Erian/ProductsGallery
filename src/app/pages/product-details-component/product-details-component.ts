import { CardProductComponent } from './../../shared/components/card-product-component/card-product-component';
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
import { InterSectionObserver } from '../../shared/directives/interSectionObserver/inter-section-observer';

@Component({
  selector: 'app-product-details-component',
  imports: [
    CurrencyPipe,
    FormsModule,
    Rating,
    CardProductComponent,
    InterSectionObserver,
  ],
  templateUrl: './product-details-component.html',
  styleUrl: './product-details-component.scss',
})
export class ProductDetailsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);
  showLazySection: boolean = false;
  productDetails: WritableSignal<IProduct | null> = signal<IProduct | null>(
    null
  );
  relatedProducts: WritableSignal<IProduct[]> = signal<IProduct[]>([]);

  productId: string = '';
  rattingValue: number = 0;
  ngOnInit(): void {
    this.getProductDetails();
  }
  onViewportEnter() {
    this.showLazySection = true;
    this.getRelatedProducts();
  }

  getParamProductId(): string {
    this.activatedRoute.paramMap.subscribe({
      next: (paramId) => {
        this.productId = paramId.get('productId') ?? '';
      },
    });
    return this.productId;
  }

  getProductDetails(): void {
    this.productService.getSingleProduct(this.getParamProductId()).subscribe({
      next: (res) => {
        this.productDetails.set(res);
        this.rattingValue = this.productDetails()?.rating.rate ?? 0;
        // this.getRelatedProducts();
      },
    });
  }

  getRelatedProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        this.relatedProducts.set(
          res.filter((prod) =>
            prod.category.includes(this.productDetails()?.category ?? '')
          )
        );
        // console.log(this.relatedProducts());
      },
    });
  }
}
