import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { NgSelect2Module } from 'ng-select2';

import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';

import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelect2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
