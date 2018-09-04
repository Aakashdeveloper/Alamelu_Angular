import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashComponent } from './dashbaord.component';
import { ProductComponent } from './products/product.component';

@NgModule({
    // All the modules will declare here
    imports: [
        BrowserModule
    ],
    // All the Component, Routes & Pipe will declare here
    declarations: [
        AppComponent,
        DashComponent,
        ProductComponent

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
