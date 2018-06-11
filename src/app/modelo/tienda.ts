import { Producto } from './producto';

export class Tienda {
    id: number;
    nombres: string;
    direccion: string;
    fechaApertura: Date;
    RUC: number;
    matriz: boolean;

    productos: Producto[];
}
