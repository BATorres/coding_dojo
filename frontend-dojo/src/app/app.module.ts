import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import {CrearSalaComponent} from "./sala/crear-sala/crear-sala.component";
import {UnirseSalaComponent} from "./sala/unirse-sala/unirse-sala.component";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CrearSalaComponent,
    UnirseSalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
