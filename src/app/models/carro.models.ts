export interface ICarro {
    _id: string;
    placa: string;
    color: string;
    modelo: string;
    marca: string;
    year: string;
    estado: string;
    reparaciones: any[];
    fotoCarro: string;
    __v: number;
}

export interface ICarroToSend {
    _id: string;
    placa: string;
    color: string;
    modelo: string;
    marca: string;
    year: string;
    estado: string;
    fotoCarro: string;
    correo: string;
}
