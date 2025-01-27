import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environment/environment';
import { IReparacion } from '../../models/reparacion.models';

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
}