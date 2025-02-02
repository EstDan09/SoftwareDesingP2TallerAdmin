import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environment/environment';
import { IReparacion, IRepaToSend } from '../../models/reparacion.models';

@Injectable({
    providedIn: 'root',
})
export class ReparacionesService {

    API_URL = environment.API;
    constructor(private http: HttpClient) { }

    getReparaciones(id: String) {
        return this.http.get<{ msg: String; data: IReparacion[] }>(
            `${this.API_URL}/reparacion/show/${id}`
        );
    }

    repair(id: String) {
        return this.http.post<{ msg: String; data: IReparacion }>(
            `${this.API_URL}/reparacion/repair/${id}`,
            {}
        );
    }

    end(id: String) {
        return this.http.post<{ msg: String; data: IReparacion }>(
            `${this.API_URL}/reparacion/finish/${id}`,
            {}
        );
    }

    getReparacion(id: String) {
        return this.http.get<{ msg: String; data: IReparacion }>(
            `${this.API_URL}/reparacion/unique/${id}`
        );
    }

    crearRepa(repa: IRepaToSend) {
            return this.http.post<{ msg: string; data: IRepaToSend }>(
              `${this.API_URL}/reparacion/registro`,
              repa
            );
          }



}