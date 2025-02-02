import { Component, OnInit } from '@angular/core';
import { IReparacion, IRepaToSend } from '../../../models/reparacion.models';
import { CarrosService } from '../../services/carros.service';
import { ReparacionesService } from '../../services/reparaciones.service';
import { ICarro } from '../../../models/carro.models';

@Component({
  selector: 'app-crear-reparacion',
  standalone: false,

  templateUrl: './crear-reparacion.component.html',
  styleUrl: './crear-reparacion.component.scss'
})
export class CrearReparacionComponent implements OnInit {

  carrosOptions: ICarro[] = [];
  estadosToChoose: string[] = ['Necesario', 'Sugerido'];

  repaACrear: IRepaToSend = {
    nombre: '',
    precio: '',
    encargado: '',
    infoCarro: '',
    estado: '',
    fotoEstado: '',
    placa: '',
  };

  selectedFile: File | null = null;
  base64Image: string | null = null;

  constructor(
    private _carrosService: CarrosService,
    private _repaService: ReparacionesService
  ) { }

  ngOnInit(): void {
    this._carrosService.getCarros("all").subscribe(res => {
      this.carrosOptions = res.data;
      console.log(this.carrosOptions);
    });
  }

  // Método que se ejecuta cuando se selecciona un carro
  onCarroSelected(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedPlaca = selectElement.value;
    
    // Buscar el carro correspondiente en el array de opciones
    const selectedCarro = this.carrosOptions.find(carro => carro.placa === selectedPlaca);

    if (selectedCarro) {
      this.repaACrear.placa = selectedCarro.placa;
      this.repaACrear.infoCarro = `${selectedCarro.marca} - ${selectedCarro.modelo} (${selectedCarro.placa})`;
    }
  }

  crearRepa() {
    console.log('Reparación a crear:', this.repaACrear);

    this._repaService.crearRepa(this.repaACrear).subscribe(
      res => {
        console.log('Reparación creada con éxito:', res.data);
        alert('Reparación creada exitosamente.');
      },
      error => {
        console.error('Error al crear la reparación:', error);
        alert('Hubo un error al crear la reparación.');
      }
    );
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];

      // Convertir a Base64
      const reader = new FileReader();
      reader.onload = () => {
        this.base64Image = reader.result as string;
        this.repaACrear.fotoEstado = this.base64Image;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}
