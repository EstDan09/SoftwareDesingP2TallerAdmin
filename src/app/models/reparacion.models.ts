export interface IReparacion {
    _id: string;
    nombre: string;
    precio: string;
    encargado: string;
    infoCarro: string;
    estado: string;
    fotoEstado: string;
    aprobado: string;
    __v: number;
}

export interface IRepaToSend {
    nombre: string;
    precio: string;
    encargado: string;
    infoCarro: string;
    estado: string;
    fotoEstado: string;
    placa: string;
}

