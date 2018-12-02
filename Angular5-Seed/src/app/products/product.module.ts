import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { MyUpperPipe } from './myUpper.pipe';
import { AddValuePipe } from './addValue.pipe';
import { FilterProduct } from './filterProduct.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'products', component: ProductComponent},
            {path: 'products/:id', component: ProductDetailComponent},
        ]),
        SharedModule
    ],
    declarations: [
        ProductComponent,
        MyUpperPipe,
        AddValuePipe,
        FilterProduct,
        ProductDetailComponent
    ],
    providers: [
        ProductService
    ]
})

export class ProductModule {}
