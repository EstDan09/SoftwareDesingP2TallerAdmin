import { Component, OnInit } from '@angular/core';
import { IUsuarioDropdown } from '../../../models/usuario.model';
import { UsuariosService } from '../../services/usuarios.service';
import { CarrosService } from '../../services/carros.service';
import { ICarroToSend } from '../../../models/carro.models';

@Component({
  selector: 'app-crear-carro',
  standalone: false,

  templateUrl: './crear-carro.component.html',
  styleUrl: './crear-carro.component.scss'
})
export class CrearCarroComponent implements OnInit {

  userOptions: IUsuarioDropdown[] = [];

  carroToSend: ICarroToSend = {
    _id: '',
    placa: '',
    color: '',
    modelo: '',
    marca: '',
    year: '',
    estado: '',
    fotoCarro: '',
    correo: ''
  }

  selectedFile: File | null = null; // Archivo seleccionado
  base64Image: string | null = null; // Imagen en formato Base64

  constructor(private _userService: UsuariosService, private _carroService: CarrosService) { }

  ngOnInit(): void {
    this._userService.getUsuarios().subscribe(res => {
      res.data.forEach(element => {
        let toAdd: IUsuarioDropdown = {
          nombre: element.nombre,
          correo: element.correo
        }
        this.userOptions.push(toAdd);
      })
    })
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];

      // Convertir el archivo a Base64
      const reader = new FileReader();
      reader.onload = () => {
        this.base64Image = reader.result as string; // Convertir resultado a string
        this.carroToSend.fotoCarro = this.base64Image; // Asignar a usuarioACrear
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  crearCarro() {
    console.log('Carro a crear:', this.carroToSend);
    this._carroService.crearCarro(this.carroToSend).subscribe(res => {
      console.log('Carro creado con éxito:', res.data);
        alert('Carro creado exitosamente.');
    },
    (error) => {
      console.error('Error al crear el carro:', error);
      alert('Hubo un error al crear el carro.');
    });
  }



}
