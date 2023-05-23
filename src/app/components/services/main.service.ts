import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class MainService {

    private isLoading: boolean = false;
    public loadingStatusListener = new Subject<boolean>();


    constructor(private http: HttpClient, private router: Router) { }
    capitalize(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    getLoadingStatus() {
        return this.isLoading;
    }

    getLoadingStatusListener() {
        return this.loadingStatusListener.asObservable();
    }

    cleanNeutralString(str: string) {
        return str.toLowerCase().replace(/ /g, "")
    }

    hideLoading() {
        this.isLoading = false;
        this.loadingStatusListener.next(false);
    }

    startLoading() {
        this.isLoading = true;
        this.loadingStatusListener.next(true);
    }

    getType(obj: any) {
        return typeof obj;
    }

    isEmptyObject(obj: any) {
        return Object.keys(obj).length === 0;
    }

    getBuildDate() {
        const headers: any = new HttpHeaders({
            responseType: 'text',
            'Content-Type': 'text'
        });
        return this.http.get('assets/.build_date', { headers });
    }

    public isLoginCurrent() {
        if (this.router.url.endsWith('/login')) {
            return true;
        } else {
            return false;
        }
    }



}
