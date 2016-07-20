import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {ContactsAppRoutes} from './app/contact-list-component/contact-list.routes';
import {provideRouter} from "@angular/router";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  provideRouter(ContactsAppRoutes)
]);

