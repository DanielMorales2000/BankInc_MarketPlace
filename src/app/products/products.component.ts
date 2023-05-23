import { Component, Inject, OnInit } from '@angular/core';
import { AppService } from '../components/services/app.service';
import { Route } from '@angular/router';
import { CategoryModel } from './models/category.model';
import { AuthService } from '../components/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  categories: CategoryModel[] = [];

  constructor(private service: AppService, private authService: AuthService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCategories();
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
    this.service.getService('/products', '').subscribe({
      next: (response) => {
        response;
      },
      error: (error) => {
        error;
      }
    });;
  }

  onSelectCategory(category: string) {
    category;
  }

  onCloseSession() {
    this.authService.closeSession();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ShoppingCartComponent, {
      width: '80vw',
      maxWidth: '100vw',
      height: '80vh',
      maxHeight: '100vh',
      data: {}
    },);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result;
      }
    });
  }

}
