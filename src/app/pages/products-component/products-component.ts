import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { CardProductComponent } from '../../shared/components/card-product-component/card-product-component';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../shared/services/product/product-service';
import { IProduct } from '../../core/interfaces/Iproducts';

@Component({
  selector: 'app-products-component',
  imports: [CardProductComponent, FormsModule],
  templateUrl: './products-component.html',
  styleUrl: './products-component.scss',
})
export class ProductsComponent implements OnInit {
  productService = inject(ProductService);
  products: WritableSignal<IProduct[]> = signal<IProduct[]>([]);
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.products.set(res);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
