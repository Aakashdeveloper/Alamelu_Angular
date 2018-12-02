import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product.model';
import { ProductService } from './product.service';


@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    id: Number;
    name: string;
    image: string;
    desc: string;
    details: any[];

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {}

    ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];
        this._productService.getProductDetail(this.id)
            .subscribe((data) => this.details = data);
    }

    onBack(): void {
        this._router.navigate(['products']);
    }
}
