import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MainService } from '../components/services/main.service';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  constructor(public graphicDialog: MatDialogRef<ShoppingCartComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private mainService: MainService,
    private filerSaver: FileSaverService) {

  }
}
