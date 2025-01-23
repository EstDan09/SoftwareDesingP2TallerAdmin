import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { UsuarioCardComponent } from './components/usuario-card/usuario-card.component';
import { CarroCardComponent } from './components/carro-card/carro-card.component';



@NgModule({
  declarations: [
    SidemenuComponent,
    UsuarioCardComponent,
    CarroCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidemenuComponent,
    UsuarioCardComponent,
    CarroCardComponent
  ]
})
export class SharedModule { }
