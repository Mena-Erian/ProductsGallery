import { IProduct } from './../../core/interfaces/Iproducts';
import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../shared/services/cart/cart-service';
import { CartItemComponent } from '../../shared/components/cart-item-component/cart-item-component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { SkeletonModule } from 'primeng/skeleton';
import { RippleModule } from 'primeng/ripple';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ICart } from '../../core/interfaces/ICart';
@Component({
  selector: 'app-cart-component',
  imports: [
    CartItemComponent,
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    InputNumberModule,
    BadgeModule,
    TooltipModule,
    DividerModule,
    TagModule,
    SkeletonModule,
    RippleModule,
    ConfirmDialogModule,
    Toast,
  ],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.scss',
})
export class CartComponent implements OnInit {
  private readonly cartService = inject(CartService);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  // private readonly toastrService = inject(ToastrService);
  // cartRes: ICartRoot = {} as ICartRoot;
  cartData: WritableSignal<ICart | null> = signal<ICart | null>(null);

  cartProducts: any[] = [];
  ngOnInit(): void {
    this.getUserCart();
  }
  // goCheckOut(cartId: string): void {
  //   if (this.cartData().totalCartPrice > 0) {
  //     this.router.navigate(['/checkout', cartId], {
  //       relativeTo: this.activatedRoute,
  //     });
  //   } else {
  //     this.toastrService.error("You Don't Have Product's in your Cart");
  //   }
  //   // [routerLink]="['/checkout', cartData()._id]"
  // }

  getUserCart(): void {
    this.cartService.getSingleCartItem('1').subscribe({
      next: (res) => {
        console.log(res);
        this.cartData.set(res);
        console.log(this.cartData());
      },
    });
  }
  getAllCartData(): void {
    this.cartService.getAllCart().subscribe({
      next: (res) => {
        console.log(res);
        this.cartData.set(res);
        console.log(this.cartData());
      },
    });
  }

  callDeleteProduct(): void {
    this.cartService.clearAllCart().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.getAllCartData();
  }
  deleteAllProducts(): void {
    // Swal.fire({
    //   title: 'Error!',
    //   text: 'Do you want to continue',
    //   icon: 'error',
    //   confirmButtonText: 'Cool',
    // });
  }
}
