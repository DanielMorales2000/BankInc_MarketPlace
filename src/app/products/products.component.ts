import { Component, Inject, OnInit } from '@angular/core';
import { AppService } from '../components/services/app.service';
import { Route } from '@angular/router';
import { CategoryModel } from './models/category.model';
import { AuthService } from '../components/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ProductModel } from './models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  categories: CategoryModel[] = [];
  selectedCategory: CategoryModel | null = null;
  products: ProductModel[] = [];

  constructor(private service: AppService, private authService: AuthService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  getCategories() {
    this.service.getService('categories', '').subscribe({
      next: (response) => {
        this.categories = response;
      },
      error: (error) => {
        error;
      }
    });
  }

  getProducts() {
    this.service.getService('products', '').subscribe({
      next: (response) => {
        this.products = response;
        this.products;
      },
      error: (error) => {
        error;
      }
    });;
  }

  onSelectCategory(category: string) {
    category;
  }

}
