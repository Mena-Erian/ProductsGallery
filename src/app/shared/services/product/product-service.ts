import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { IProduct } from '../../../core/interfaces/Iproducts';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  httpClient = inject(HttpClient);

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.baseUrl}/products`);
  }
  getSingleProduct(productId: string): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/products/${productId}`);
  }

  addNewProduct(newProduct: any): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/products`, newProduct);
  }
  updateProduct(productId: string, product: any): Observable<any> {
    return this.httpClient.put(
      `${environment.baseUrl}/products/${productId}`,
      product
    );
  }
  deleteProduct(productId: string): Observable<any> {
    return this.httpClient.delete(
      `${environment.baseUrl}/products/${productId}`
    );
  }
}
