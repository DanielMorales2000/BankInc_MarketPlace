import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCartComponent } from 'src/app/shopping-cart/shopping-cart.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {

  constructor(private service: AppService, private authService: AuthService,
    public dialog: MatDialog) { }

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
