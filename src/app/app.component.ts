import { Component, Inject, OnInit, EventEmitter } from '@angular/core';
import { Route } from '@angular/router';
import { Subscription } from 'rxjs';
import { MainService } from './components/services/main.service';
import { AuthService } from './components/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  static emitUsuarioDocumentos = new EventEmitter<any>();

  title = 'BankInc_MarketPlace';

  isLoading: boolean = false;
  isAuth: boolean = false;

  constructor(private authService: AuthService,
    private mainService: MainService) { }

  ngOnInit() {
    this.mainService.loadingStatusListener.subscribe((data) => {
      this.isLoading = data;
    });

    this.authService.isAuthenticatedListener.subscribe((data) => {
      this.isAuth = data;
    });

    this.authService.verifyLoginState();
  }

  get isLoginCurrent() {
    return this.mainService.isLoginCurrent();
  }
}
