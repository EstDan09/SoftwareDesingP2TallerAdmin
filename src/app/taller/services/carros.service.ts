import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environment/environment';
import { ICarro } from '../../models/carro.models';
import { ICarroToSend } from '../../models/carro.models';

@Injectable({
    providedIn: 'root',
})
export class CarrosService {
    API_URL = environment.API;
    constructor(private http: HttpClient) { }

    getCarros(id: String) {
        return this.http.get<{ msg: String; data: ICarro[] }>(
            `${this.API_URL}/carro/${id}`
        );
    }

    crearCarro(carro: ICarroToSend) {
        return this.http.post<{ msg: string; data: ICarroToSend }>(
          `${this.API_URL}/carro/registro`,
          carro
        );
      }
}