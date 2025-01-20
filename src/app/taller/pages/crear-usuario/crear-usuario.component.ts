import { Component } from '@angular/core';
import { IUsuario } from '../../../models/usuario.model';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-crear-usuario',
  standalone: false,
  
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.scss'
})
export class CrearUsuarioComponent {

  constructor(private _usuarioService: UsuariosService){
  }
  usuarioACrear: IUsuario = {
    _id:     '',
    nombre:   '',
    correo:   '',
    password: '',
    carros:   [],
    __v:      0,
  };

  crearUsuario(): void {
    console.log('Usuario creado:', this.usuarioACrear);
    this._usuarioService.crearUsuario(this.usuarioACrear).subscribe(
      (response) => {
        console.log('Usuario creado con éxito:', response.data);
        alert('Usuario creado exitosamente.');
      },
      (error) => {
        console.error('Error al crear el usuario:', error);
        alert('Hubo un error al crear el usuario.');
      }
    );
  }

}
