import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { OAuthModule } from 'angular-oauth2-oidc';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { LoginComponent } from './components/login/login.component';

import { DataService } from './services/http/data.service';
import { InvoiceService } from './services/invoicing/invoice.service';
import { LoginService } from './services/login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InvoiceComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // OAuthModule.forRoot()
  ],
  providers: [
    DataService,
    InvoiceService,
    LoginService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
