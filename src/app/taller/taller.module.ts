import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CarrosComponent } from './pages/carros/carros.component';
import { ReparacionesComponent } from './pages/reparaciones/reparaciones.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TallerRoutingModule } from './taller-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import { FormsModule } from '@angular/forms'; // Importar FormsModule




@NgModule({
  declarations: [
    UsuariosComponent,
    CarrosComponent,
    ReparacionesComponent,
    InicioComponent,
    CrearUsuarioComponent
  ],
  imports: [
    CommonModule,
    TallerRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
  ]
})
export class TallerModule { }
