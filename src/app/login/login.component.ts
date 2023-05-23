import { FormBuilder, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from './../components/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoginDataModel } from './models/logindatamodel.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(private authService: AuthService, private builder: FormBuilder, private router: Router) {
    this.loginFormGroup = this.builder.group({
      'email': ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      'password': ['', [Validators.required, Validators.maxLength(16), Validators.minLength(5)]],
    },);
  }

  ngOnInit(): void {
    this.authService.verifyLoginState();
  }

  login(): void {
    let loginData: LoginDataModel = this.loginFormGroup.value;
    this.authService.login(loginData);
  }

  back() {
    this.router.navigate(["/products"]);

  }
}
