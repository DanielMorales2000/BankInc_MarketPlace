
export class LoginResponseModel {
    public access_token: string;
    public refresh_token: string;

    constructor(json: any) {
        this.access_token = json.access_token;
        this.refresh_token = json.refresh_token;
    }
}