import { Component } from '@angular/core';
import { IUsuario } from '../../../models/usuario.model';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-crear-usuario',
  standalone: false,
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss'],
})
export class CrearUsuarioComponent {
  usuarioACrear: IUsuario = {
    _id: '',
    nombre: '',
    correo: '',
    password: '',
    carros: [],
    __v: 0,
  };

  selectedFile: File | null = null; // Archivo seleccionado
  base64Image: string | null = null; // Imagen en formato Base64

  constructor(private _usuarioService: UsuariosService) {}

  // Manejar selección de archivo
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];

      // Convertir el archivo a Base64
      const reader = new FileReader();
      reader.onload = () => {
        this.base64Image = reader.result as string; // Convertir resultado a string
        this.usuarioACrear.fotoPerfil = this.base64Image; // Asignar a usuarioACrear
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  // Crear usuario
  crearUsuario(): void {
    console.log('Usuario a crear:', this.usuarioACrear);
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
