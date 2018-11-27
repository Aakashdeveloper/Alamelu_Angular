import { Injectable } from '@angular/core';
import { IProduct} from './product.model';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class ProductService {

    constructor(private _http: Http,
                private __http: HttpClient) {}

    private _productUrl= 'https://ngproductsparam.herokuapp.com/api/getProductDetails';

    getProduct(): Observable<IProduct[]> {
        return this.__http.get<IProduct[]>(this._productUrl);
    }
}



/*
Dependency injection is you create the instance from any external
source rather than creating itself

getProduct(): Promise<IProduct[]> {
        return this._http.get(this._productUrl)
                    .toPromise()
                    .then((res) => res.json());
    }

for ang6{
import { Observable} from 'rxjs';
import {map} from 'rxjs/operator';
getProduct(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .pipe(map(this.extractData));
    }

}

 private extractData(res: Response) {
        return res.json();
    }
getProduct(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map(this.extractData);
    }


    MEAN
    mongo express angular node
*/
