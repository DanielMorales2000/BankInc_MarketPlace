import { Component, Inject, OnInit } from '@angular/core';
import { AppService } from '../components/services/app.service';
import { Route } from '@angular/router';
import { CategoryModel } from './models/category.model';
import { AuthService } from '../components/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ProductModel } from './models/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  categories: CategoryModel[] = [];
  selectedCategory: CategoryModel | null = null;
  products: ProductModel[] = [];
  filterForm: FormGroup;

  constructor(private service: AppService, private authService: AuthService,
    public dialog: MatDialog, private builder: FormBuilder) {
    this.filterForm = this.builder.group({
      'name': ['', [Validators.maxLength(30)]],
    },);
  }

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
    const productName: string = this.filterForm.value['name'];
    const endpoint: string = `products?title=${productName}&categoryId=${this.selectedCategory?.id || ''}`;
    this.service.getService(endpoint, '').subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (error) => {
        error;
      }
    });;
  }

  onSelectCategory(category: CategoryModel) {
    if (this.selectedCategory === category) {
      this.selectedCategory = null;
    }
    else {
      this.selectedCategory = category;
    }
    this.getProducts();
  }

}
