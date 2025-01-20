import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { UsuarioCardComponent } from './components/usuario-card/usuario-card.component';



@NgModule({
  declarations: [
    SidemenuComponent,
    UsuarioCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidemenuComponent,
    UsuarioCardComponent
  ]
})
export class SharedModule { }
