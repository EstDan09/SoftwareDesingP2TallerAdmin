export interface IUsuario {
    _id: string;
    nombre: string;
    correo: string;
    password: string;
    carros: any[];
    fotoPerfil?: string; 
    __v: number;
  }
  