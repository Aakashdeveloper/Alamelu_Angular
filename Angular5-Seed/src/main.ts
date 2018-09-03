import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


  /*
  Modules=> All the declaration goes here
  Component=> it contains all the HTML css and logic part
  Pipe=> this help to manupulate data on run time
  Service=> connect to third party
  Routes=> Routing Part
  */
