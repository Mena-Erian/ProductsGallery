import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  httpClient = inject(HttpClient);

  getAllProducts(): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/products`);
  }
  getSingleProduct(productId: number): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/products/${productId}`);
  }

  addNewProduct(newProduct: any): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/products`, newProduct);
  }
  updateProduct(productId: number, product: any): Observable<any> {
    return this.httpClient.put(
      `${environment.baseUrl}/products/${productId}`,
      product
    );
  }
  deleteProduct(productId: number): Observable<any> {
    return this.httpClient.delete(
      `${environment.baseUrl}/products/${productId}`
    );
  }
}
