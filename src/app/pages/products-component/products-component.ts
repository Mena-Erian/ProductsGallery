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
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

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
    AnimateOnScrollModule,
  ],
  templateUrl: './products-component.html',
  styleUrl: './products-component.scss',
})
export class ProductsComponent implements OnInit {
  private readonly productService = inject(ProductService);
  products: WritableSignal<IProduct[]> = signal<IProduct[]>([]);
  // Search Variables
  searchItems: string[] = [];
  searchInputValues: string[] = [];
  // Sort
  sortBtnItems: MenuItem[] = [];
  constructor(private messageService: MessageService) {}
  ngOnInit(): void {
    this.getAllProducts();
    this.initSortBtnItems();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.products.set(res);
      },
    });
  }

  search(event: AutoCompleteCompleteEvent) {
    this.searchItems = this.products()
      .map((product) =>
        product.title.toLowerCase().includes(event.query.toLowerCase())
          ? product.title
          : ''
      )
      .filter((val) => val != '');
  }

  initSortBtnItems() {
    this.sortBtnItems = [
      {
        label: 'Price',
        icon: 'pi pi-fw pi-dollar',
        // command: () => this.sortByPrice(),
        items: [
          {
            label: 'Low to High',
            icon: 'pi pi-fw pi-chevron-circle-down',
            command: () => this.sortByPrice(),
          },
          {
            label: 'High to Low',
            icon: 'pi pi-fw pi-chevron-circle-up',
            command: () => this.sortByPrice(false),
          },
        ],
      },
      {
        label: 'Name (Z-A)',
        command: () => {
          this.sortByName(false);
        },
        icon: 'pi pi-fw pi-sort-alpha-up-alt',
      },
      { separator: true },
      {
        label: 'Remove All Sorting',
        command: () => {
          this.sortById();
        },
        icon: 'pi pi-fw pi-trash',
      },
    ];
  }

  sortByName(fromA: boolean = true) {
    if (fromA)
      this.products.set(
        this.products().sort((a, b) => a.title.localeCompare(b.title))
      );
    else
      this.products.set(
        this.products().sort((a, b) => b.title.localeCompare(a.title))
      );
  }
  sortByPrice(fromLowPrice: boolean = true) {
    if (fromLowPrice) this.products().sort((a, b) => a.price - b.price);
    else this.products().sort((a, b) => b.price - a.price);
  }
  sortById() {
    this.products().sort((a, b) => a.id - b.id);
  }
}
