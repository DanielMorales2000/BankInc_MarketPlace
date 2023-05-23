import { CategoryModel } from "./category.model";


export class ProductModel {

    public id: number;
    public title: string;
    public price: number;
    public description: string;
    public images: string[];
    public creationAt: Date;
    public updatedAt: Date;
    public category: CategoryModel;

    constructor(json: any) {
        this.id = json.id;
        this.title = json.title;
        this.price = json.price;
        this.description = json.description;
        this.images = json.images;
        this.creationAt = json.creationAt;
        this.updatedAt = json.updatedAt;
        this.category = json.category;
    }
}
