import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashComponent } from './dashbaord.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myUpper.pipe';
import { AddValuePipe } from './products/addValue.pipe';
import { FilterProduct } from './products/filterProduct.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { NotFoundComponent } from './shared/notfound.component';

@NgModule({
    // All the modules will declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'products', component: ProductComponent},
            {path: 'products/:id', component: ProductDetailComponent},
            {path: 'orders', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent}
        ])

    ],
    // All the Component, Routes & Pipe will declare here
    declarations: [
        AppComponent,
        DashComponent,
        ProductComponent,
        MyUpperPipe,
        AddValuePipe,
        FilterProduct,
        StarComponent,
        OrderComponent,
        HomeComponent,
        ProductDetailComponent,
        NotFoundComponent

    ],
    // Only Main Component Declare here
    bootstrap: [
        AppComponent
    ],
    // All Services Declare here
    providers: [
        ProductService
    ]
})

export class AppModule {

}
