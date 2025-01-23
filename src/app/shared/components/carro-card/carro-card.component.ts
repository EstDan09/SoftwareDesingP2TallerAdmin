import { Component, Input } from '@angular/core';
import { ICarro } from '../../../models/carro.models';

@Component({
  selector: 'app-carro-card',
  standalone: false,
  
  templateUrl: './carro-card.component.html',
  styleUrl: './carro-card.component.scss'
})
export class CarroCardComponent {
  @Input() carroToShow!: ICarro;
}
