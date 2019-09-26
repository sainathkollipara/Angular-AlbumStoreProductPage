import { Component, OnInit } from '@angular/core';

import { GiftProduct } from '../giftproduct';

import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

  giftProductInfo: GiftProduct;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getGiftProduct(1).subscribe(response =>
      this.giftProductInfo = response );
  }

}
