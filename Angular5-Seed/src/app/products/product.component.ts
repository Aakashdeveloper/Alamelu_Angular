import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    selector: 'app-prod',
    templateUrl: './product.component.html',
    // styles: ['thead{color:green}', 'h4{color:tomato}'],
    styleUrls : ['./product.component.css']
})

export class ProductComponent implements OnInit {
    title: String = '*****Product List******';
    outMessage: string;
    showTable: Boolean = true;
    showImage: Boolean = true;
    imageWidth: Number = 150;
    userInput: String;
    products: IProduct[];

    constructor(private _productService: ProductService) {}

    ngOnInit(): void {
        this._productService.getProduct()
            .then((data) => this.products = data);
    }

    ToggleImage(): void {
        this.showImage = !this.showImage;
    }

    onDataRecieve(message: string): void {
        this.title = '~~~Product List ~~~~ ' + message;
        this.outMessage = message;
    }
}




/*
One Way Binding
--Data Binding  {{}}
--Property Binding []
--Event Binding ()
Two Way Binding [()]

string
number
boolean
*/
