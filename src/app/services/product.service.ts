import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ProductData } from '../types/ecommtypes';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseURL = 'http://localhost:3000/api/products/';
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.baseURL);
  }

  getProduct(id: any): Observable<any> {
    return this.http.get<any>(this.baseURL + id);
  }

  deleteProduct(id: any): Observable<any> {
    return this.http.delete<any>(this.baseURL + id);
  }

  addProduct(product: ProductData) {
    return this.http.post<any>(this.baseURL, product);
  }

  updateProduct(product: ProductData) {
    return this.http.put<any>(this.baseURL + product.id, product);
  }
}
