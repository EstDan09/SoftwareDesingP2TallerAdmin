import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CarrosComponent } from './pages/carros/carros.component';
import { ReparacionesComponent } from './pages/reparaciones/reparaciones.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import { CrearCarroComponent } from './pages/crear-carro/crear-carro.component';
import { CrearReparacionComponent } from './pages/crear-reparacion/crear-reparacion.component';
import { ViewReparacionComponent } from './pages/view-reparacion/view-reparacion.component';

const routes: Routes = [
    {
        path: 'usuarios',
        component: UsuariosComponent
    },
    {
        path: 'carros/:id',
        component: CarrosComponent
    },
    {
        path: 'reparaciones/:id',
        component: ReparacionesComponent
    },
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: 'crear-usuario',
        component: CrearUsuarioComponent
    },
    {
        path: 'crear-carro',
        component: CrearCarroComponent
    }
    ,
    {
        path: 'crear-reparacion',
        component: CrearReparacionComponent
    },
    {
        path: 'ver-reparacion/:id',
        component: ViewReparacionComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    
})
export class TallerRoutingModule { }
