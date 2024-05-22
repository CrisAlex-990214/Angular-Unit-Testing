import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44368/product/';

  constructor(private http: HttpClient) { }

  getById(id: number) {
    return this.http.get<Product>(`${this.apiUrl}${id}`);
  }

  create(body: Product) {
    return this.http.post<number>(this.apiUrl, body);
  }
}
