import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { BasicModalComponent } from './components/shared/basic-modal/basic-modal.component';
import { MaterialModule } from './components/shared/material.module';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCardComponent } from './components/shared/product-card/product-card.component';
import { MainMenuComponent } from './components/shared/main-menu/main-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    ShoppingCartComponent,
    BasicModalComponent,
    LoadingComponent,
    SidenavComponent,
    ProductDetailComponent,
    ProductCardComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
