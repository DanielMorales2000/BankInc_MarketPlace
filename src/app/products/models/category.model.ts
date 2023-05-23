

export class CategoryModel {
    public id: number;
    public name: string;
    public image: string;
    public creationAt: Date;
    public updatedAt: Date;


    constructor(json: any) {
        this.id = json.id;
        this.name = json.name;
        this.image = json.image;
        this.creationAt = json.creation_at;
        this.updatedAt = json.updated_at;
    }
}