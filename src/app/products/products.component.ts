import { Component, Inject, OnInit } from '@angular/core';
import { AppService } from '../components/services/app.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private service: AppService) {

  }

  ngOnInit(): void {
    this.service.getService('/products', '');
  }


}
