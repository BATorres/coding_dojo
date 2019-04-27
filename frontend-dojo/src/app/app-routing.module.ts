import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from "./inicio/inicio.component";
import {CrearSalaComponent} from "./sala/crear-sala/crear-sala.component";
import {UnirseSalaComponent} from "./sala/unirse-sala/unirse-sala.component";

const rutasPrincipales: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'crear-sala',
    component: CrearSalaComponent
  },
  {
    path: 'unirse-sala',
    component: UnirseSalaComponent
  },
  {
    path: '',
    component: InicioComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(rutasPrincipales, { useHash: true }) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
