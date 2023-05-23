import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  ngOnInit(): void {
    this.product;
  }
  @Input() set productInput(value: ProductModel) {
    this.product = value;
  }

  product: ProductModel = new ProductModel({});
}
