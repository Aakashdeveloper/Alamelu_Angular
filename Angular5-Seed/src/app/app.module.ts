import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashComponent } from './dashbaord.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notfound.component';
import { ProductModule } from './products/product.module';

@NgModule({
    // All the modules will declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'orders', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent}
        ]),
        ProductModule

    ],
    // All the Component, Routes & Pipe will declare here
    declarations: [
        AppComponent,
        DashComponent,
        OrderComponent,
        HomeComponent,
        NotFoundComponent
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
