import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCartComponent } from 'src/app/shopping-cart/shopping-cart.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MainService } from '../../services/main.service';
import { BasicModalComponent } from '../basic-modal/basic-modal.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  isAuth: boolean = false;

  constructor(private service: AppService, private authService: AuthService, private mainService: MainService,
    public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.authService.isAuthenticatedListener.subscribe((data) => {
      this.isAuth = data;
    });

    this.authService.verifyLoginState();
  }

  onCloseSession() {
    this.authService.closeSession();
  }

  onLogin() {
    this.router.navigate(["/"]);
  }

  openDialog(): void {
    if (!this.isAuth) {
      this.dialog.open(BasicModalComponent, {
        data: { title: "Opps! We're sorry", body: "You must be logged in to have a shopping cart" },
      });
      return;
    }

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
