import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomerFormComponent } from './customerForms/customerForms.component';
import { FormPosterService } from './services/formPoster.Service';

@NgModule({

    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
     ],
    declarations: [
        AppComponent,
        CustomerFormComponent
    ],
    bootstrap : [
        AppComponent
    ],
    providers: [
        FormPosterService
    ]
})


export class AppModule {

}
