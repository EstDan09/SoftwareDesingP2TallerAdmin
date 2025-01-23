import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CarrosComponent } from './pages/carros/carros.component';
import { ReparacionesComponent } from './pages/reparaciones/reparaciones.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import { CrearCarroComponent } from './pages/crear-carro/crear-carro.component';

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
