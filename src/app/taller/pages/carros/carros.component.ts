import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrosService } from '../../services/carros.service';
import { ICarro } from '../../../models/carro.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carros',
  standalone: false,
  
  templateUrl: './carros.component.html',
  styleUrl: './carros.component.scss'
})
export class CarrosComponent implements OnInit {

  carros: ICarro[] = [];
  id: string = '';

  constructor( private _carroService: CarrosService, private _activRoute: ActivatedRoute, private _router: Router){}

  ngOnInit(): void {
    this._activRoute.params.subscribe( params => {
      this.id = params['id'];
      this.getCarros(this.id);
    })
  }

  getCarros(id: string) {
    this._carroService.getCarros(id).subscribe( res => {
      this.carros = res.data;
      console.log(this.carros);
    });
  }
  irACrearCarro(){
    this._router.navigate(['taller/crear-carro']);
  }
}
