import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IUsuario } from '../../models/usuario.model';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  API_URL = environment.API;
  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get<{ msg: String; data: IUsuario[] }>(
      `${this.API_URL}/usuario/todos`
    );
  }

  getUsuario(id: String) {
    return this.http.get<{ msg: String; data: IUsuario }>(
      `${this.API_URL}/usuario/unique/${id}`
    );
  }

  crearUsuario(user: IUsuario) {
    return this.http.post<{ msg: string; data: IUsuario }>(
      `${this.API_URL}/usuario/registro`,
      user
    );
  }
}