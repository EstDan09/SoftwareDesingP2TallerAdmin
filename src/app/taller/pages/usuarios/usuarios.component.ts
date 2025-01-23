import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuariosService } from '../../services/usuarios.service';
import { IUsuario } from '../../../models/usuario.model';
@Component({
  selector: 'app-usuarios',
  standalone: false,
  
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent implements OnInit {
  public usuarios: IUsuario[] = [];

  constructor(private _usuariosService: UsuariosService, private _router: Router){}

  ngOnInit() {
    this._usuariosService.getUsuarios().subscribe(res => {
      this.usuarios = res.data;
      //console.log(this.usuarios);
    })
  }

  irACrearUsuario(): void {
    this._router.navigate(['taller/crear-usuario']);
  }

  irACarrosDeUsuario(id: string) {
    this._router.navigate(['taller/carros', id])
  }

}
