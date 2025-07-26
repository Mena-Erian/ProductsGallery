import { ButtonModule } from 'primeng/button';
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
import { AutoComplete } from 'primeng/autocomplete';
import { SplitButton } from 'primeng/splitbutton';
import { MenuItem, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SearchProductPipe } from '../../shared/pipes/searchProduct/search-product-pipe';
interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-products-component',
  imports: [
    CardProductComponent,
    FormsModule,
    AutoComplete,
    ButtonModule,
    SplitButton,
    ToastModule,
    SearchProductPipe,
  ],
  templateUrl: './products-component.html',
  styleUrl: './products-component.scss',
})
export class ProductsComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  productService = inject(ProductService);
  products: WritableSignal<IProduct[]> = signal<IProduct[]>([]);
  sortBtnItems: MenuItem[] = [];

  searchItems: string[] = [];
  searchInputValue: string[] = [];
  search(event: AutoCompleteCompleteEvent) {
    this.searchItems = this.products()
      .map((product) =>
        product.title.toLowerCase().includes(event.query.toLowerCase())
          ? product.title
          : ''
      )
      .filter((val) => val != '');
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.sortBtnItems = [
      {
        label: 'Price',
        command: () => {},
        items: [
          {
            label: 'Bookmark',
            icon: 'pi pi-fw pi-bookmark',
          },
          {
            label: 'Bookmark',
            icon: 'pi pi-fw pi-bookmark',
          },
        ],
      },
      { separator: true },
      { label: 'Name (A-Z)', command: () => {} },
    ];
  }

  getAllProducts(): void {
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
