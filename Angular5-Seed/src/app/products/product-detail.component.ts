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

    constructor(private _route: ActivatedRoute,
                private _router: Router) {}

    ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];
        this._route
            .queryParams
            .subscribe((data) => {
                this.name = data['name'];
                this.image = data['img'];
                this.desc = data['desc'];
            });
    }

    onBack(): void {
        this._router.navigate(['products']);
    }
}
