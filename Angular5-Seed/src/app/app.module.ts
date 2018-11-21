import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashComponent } from './dashbaord.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myUpper.pipe';
import { AddValuePipe } from './products/addValue.pipe';
import { FilterProduct } from './products/filterProduct.pipe';

@NgModule({
    // All the modules will declare here
    imports: [
        BrowserModule,
        FormsModule
    ],
    // All the Component, Routes & Pipe will declare here
    declarations: [
        AppComponent,
        DashComponent,
        ProductComponent,
        MyUpperPipe,
        AddValuePipe,
        FilterProduct

    ],
    // Only Main Component Declare here
    bootstrap: [
        AppComponent
    ],
    // All Services Declare here
    providers: []
})

export class AppModule {

}
