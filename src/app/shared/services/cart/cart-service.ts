import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartCounter: WritableSignal<number> = signal<number>(0);
  constructor(private httpClient: HttpClient) {}
  getAllCart(): Observable<any> {
    return this.httpClient.get<any>(`${environment.baseUrl}/carts`);
  }
  addProductToCart(id: string): Observable<any> {
    return this.httpClient.post<any>(`${environment.baseUrl}/carts`, {
      productId: id,
    });
  }
  getSingleCartItem(id: string): Observable<any> {
    return this.httpClient.delete(`${environment.baseUrl}/carts/${id}`);
  }

  removeSpecificCartItem(id: string): Observable<any> {
    return this.httpClient.delete(`${environment.baseUrl}/carts/${id}`);
  }
  clearAllCart(): Observable<any> {
    return this.httpClient.delete(`${environment.baseUrl}/carts`);
  }
  updateCountOfProductCart(
    idProduct: string,
    newCount: number
  ): Observable<any> {
    return this.httpClient.put<any>(
      `${environment.baseUrl}/cart/${idProduct}`,
      {
        count: `${newCount}`,
      }
    );
  }
}
