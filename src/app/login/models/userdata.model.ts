
export class UserData {
    public id: number;
    public email: string;
    public password: string;
    public name: string;
    public role: string;
    public avatar: string;
    public creationt: string;
    public updatedt: string;

    constructor(userData: any) {
        this.id = userData.id;
        this.email = userData.email;
        this.password = userData.password;
        this.name = userData.name;
        this.role = userData.role;
        this.avatar = userData.avatar;
        this.creationt = userData.creationt;
        this.updatedt = userData.updatedt;
    }
}