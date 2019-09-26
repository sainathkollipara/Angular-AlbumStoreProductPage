import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {GiftProduct} from './giftproduct';
import { Category } from './category'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  private _giftProductUrl = '../assets/album.json';
  private _categoryUrl = '../assets/categories.json';

  constructor(private _http: Http) {}
  getGiftProduct(id: number): Observable<GiftProduct> {
    return this._http.get(this._giftProductUrl).map((response) =>
    <GiftProduct>response.json());
  }

  getCategories(): Observable<Category[]> {
    return this._http.get(this._categoryUrl).map((response) =>
    <Category[]>response.json());
  }
}
