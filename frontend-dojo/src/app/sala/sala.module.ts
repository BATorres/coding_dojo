import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearSalaComponent } from './crear-sala/crear-sala.component';
import { UnirseSalaComponent } from './unirse-sala/unirse-sala.component';

@NgModule({
  declarations: [CrearSalaComponent, UnirseSalaComponent],
  imports: [
    CommonModule,
  ],
})
export class SalaModule { }
