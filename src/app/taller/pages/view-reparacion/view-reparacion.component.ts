import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IReparacion } from '../../../models/reparacion.models';
import { Router } from '@angular/router';
import { ReparacionesService } from '../../services/reparaciones.service';

@Component({
  selector: 'app-view-reparacion',
  standalone: false,
  
  templateUrl: './view-reparacion.component.html',
  styleUrl: './view-reparacion.component.scss'
})
export class ViewReparacionComponent implements OnInit {

  reparacion: IReparacion = {
    _id: '',
    nombre: '',
    precio: '',
    encargado: '',
    estado: '',
    fotoEstado: '',
    aprobado: '',
    __v: 0
  };
  id: string = '';

  constructor( private _reparacionesSerivce: ReparacionesService, private _activRoute: ActivatedRoute, private _router: Router  ){}

  ngOnInit(): void {
    this._activRoute.params.subscribe( params => {
      this.id = params['id'];
      this.getReparacion(this.id);
    })
  }

  getReparacion(id: string) {
    this._reparacionesSerivce.getReparacion(id).subscribe( res => {
      this.reparacion = res.data;
    });
  }

  onStartRepair() {
    this._reparacionesSerivce.repair(this.id).subscribe(res => {
      this.reparacion.estado = "Reparando";
      this._router.navigate(['taller/reparaciones/all']);
    });
  }

  onFinishRepair() {
    this._reparacionesSerivce.end(this.id).subscribe(res => {
      this.reparacion.estado = "Finalizado";
      this._router.navigate(['taller/reparaciones/all']);
    });
  }

  getApprovalClass(): string {
    switch (this.reparacion.aprobado) {
      case 'approved': return 'approved';
      case 'declined': return 'declined';
      case 'pending': return 'pending';
      default: return '';
    }
  }

  getApprovalText(): string {
    switch (this.reparacion.aprobado) {
      case 'approved': return '✔ Aprobado';
      case 'declined': return '❌ Rechazado';
      case 'pending': return '⌛ Pendiente';
      default: return 'Desconocido';
    }
  }
}
