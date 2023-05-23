
export class LoginDataModel {
    public email: string;
    public password: string;

    constructor(authData: any) {
        this.email = authData.email;
        this.password = authData.password;
    }
}