import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IReparacion } from '../../../models/reparacion.models';
import { Router } from '@angular/router';
import { ReparacionesService } from '../../services/reparaciones.service';

@Component({
  selector: 'app-reparaciones',
  standalone: false,

  templateUrl: './reparaciones.component.html',
  styleUrl: './reparaciones.component.scss'
})
export class ReparacionesComponent implements OnInit {
  reparaciones: IReparacion[] = [];
  id: string = '';

  constructor( private _reparacionesSerivce: ReparacionesService, private _activRoute: ActivatedRoute, private _router: Router,
    private _cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this._activRoute.params.subscribe( params => {
      this.id = params['id'];
      this.getReparaciones(this.id);
    })
  }

  getReparaciones(id: string) {
    this._reparacionesSerivce.getReparaciones(id).subscribe( res => {
      this.reparaciones = res.data;
    });
  }

  goToReparaciones(id: string) {
    this._router.navigate(['taller/ver-reparacion', id])
  }

  goToCrearReparaciones() {
    this._router.navigate(['taller/crear-reparacion']);
  }
  
}
