import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { LoginDataModel } from 'src/app/login/models/logindatamodel.model';
import { LoginResponseModel } from 'src/app/login/models/loginresponse.model';
import { environment } from 'src/environment/environment';
import { BasicModalComponent } from '../shared/basic-modal/basic-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public isAuthenticatedListener = new Subject<boolean>();

    constructor(private http: HttpClient,
        private router: Router,
        public dialog: MatDialog) { }

    login(body: LoginDataModel) {
        const sUrl = `${environment.dataServiceUrl}/auth/login`;

        this.http.post<LoginResponseModel>(sUrl, body).subscribe({
            next: (response: LoginResponseModel) => {
                this.saveAuthData(response);
                this.isAuthenticatedListener.next(true);
                this.getAuthData();
                this.router.navigate(["/products"]);
            },
            error: (error: any) => {
                this.dialog.open(BasicModalComponent, {
                    data: { title: "Error", body: "Wrong username or password" },
                });
            }
        });
    }

    public verifyLoginState() {
        const tokens = this.getAuthData();
        if (!tokens.access_token) {
            this.isAuthenticatedListener.next(false);
            return;
        }
        this.isAuthenticatedListener.next(true);
        this.router.navigate(["/products"]);
    }

    public closeSession() {
        this.clearAuthData();
        this.router.navigate(["/"]);
    }

    private getUserData(): Observable<any> {
        const tokens: LoginResponseModel = this.getAuthData();
        const sUrl = `${environment.dataServiceUrl}/auth/profile`;
        const headers: HttpHeaders = new HttpHeaders();
        headers.append('Authorization', `Bearer ${tokens.access_token}`);

        return this.http.get<any>(sUrl, { headers: headers });
    }

    private saveAuthData(tokens: LoginResponseModel) {
        localStorage.setItem("tokens", JSON.stringify(tokens));
    }

    private clearAuthData() {
        localStorage.removeItem("tokens");
    }

    private getAuthData(): LoginResponseModel {
        let tokens: LoginResponseModel = JSON.parse(localStorage.getItem("tokens") || '{}');
        return tokens;
    }

}
