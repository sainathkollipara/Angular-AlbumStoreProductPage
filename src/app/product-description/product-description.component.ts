import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

import { GiftProduct } from '../giftproduct';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  giftProductInfo: GiftProduct;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getGiftProduct(2).subscribe(response =>
      this.giftProductInfo = response);
      console.log(this.giftProductInfo);
  }

}
