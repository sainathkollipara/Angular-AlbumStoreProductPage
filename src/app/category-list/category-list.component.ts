import { Component, OnInit } from '@angular/core';
import { Category } from '../category'
import { ProductService } from '../product.service'

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getCategories().subscribe(response =>
      this.categories = response);
  }

}
