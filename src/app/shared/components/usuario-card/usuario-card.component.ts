import { Component, OnInit, Input } from '@angular/core';

import { IUsuario } from '../../../models/usuario.model';
import { UsuariosService } from '../../../taller/services/usuarios.service';

@Component({
  selector: 'app-usuario-card',
  standalone: false,
  
  templateUrl: './usuario-card.component.html',
  styleUrl: './usuario-card.component.scss'
})
export class UsuarioCardComponent implements OnInit{

  @Input() id!: String;
  public usuario: IUsuario | null = null;

  constructor(private _usuarioService: UsuariosService){}

  ngOnInit(): void {
    this._usuarioService.getUsuario(this.id).subscribe(res => {
      if (res) {
        this.usuario = res.data;
      } else {
        console.error(`Usuario de ID ${this.id} no se obtuvo.`);

      }
    })
  }

}
