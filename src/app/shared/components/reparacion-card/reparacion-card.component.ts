import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { IReparacion } from '../../../models/reparacion.models';
import { ReparacionesService } from '../../../taller/services/reparaciones.service';

@Component({
  selector: 'app-reparacion-card',
  standalone: false,

  templateUrl: './reparacion-card.component.html',
  styleUrl: './reparacion-card.component.scss'
})
export class ReparacionCardComponent {
  constructor(private _repaServicio: ReparacionesService, private _cdr: ChangeDetectorRef) { }

  @Input() reparacionToShow!: IReparacion;

  getApprovalClass(): string {
    switch (this.reparacionToShow.aprobado) {
      case 'approved':
        return 'approved';
      case 'declined':
        return 'declined';
      case 'pending':
      default:
        return 'pending';
    }
  }

  getApprovalText(): string {
    switch (this.reparacionToShow.aprobado) {
      case 'approved':
        return '✔ Aprobado';
      case 'declined':
        return '❌ Rechazado';
      case 'pending':
      default:
        return '⌛ Esperando aprobación';
    }
  }
}
