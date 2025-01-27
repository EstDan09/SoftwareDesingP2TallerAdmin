import { Component, Input } from '@angular/core';
import { IReparacion } from '../../../models/reparacion.models';

@Component({
  selector: 'app-reparacion-card',
  standalone: false,
  
  templateUrl: './reparacion-card.component.html',
  styleUrl: './reparacion-card.component.scss'
})
export class ReparacionCardComponent {
  @Input() reparacionToShow!: IReparacion;
}
