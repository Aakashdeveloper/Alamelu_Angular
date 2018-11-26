import { Injectable } from '@angular/core';
import { IProduct} from './product.model';
import { Http, Response } from '@angular/http';

@Injectable()

export class ProductService {

    constructor(private _http: Http) {}

    private _productUrl= 'https://ngproductsparam.herokuapp.com/api/getProductDetails';


    getProduct(): Promise<IProduct[]> {
        return this._http.get(this._productUrl)
                    .toPromise()
                    .then((res) => res.json());
    }
}



/*
Dependency injection is you create the instance from any external
source rather than creating itself



*/
