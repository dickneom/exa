import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Tienda } from '../modelo/tienda';
import { Tiendas } from '../modelo/tiendas';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  tiendas: Tienda[] = [];

  constructor() { }

  getTiendas(): Observable<Tienda[]> {
    return of(Tiendas);
  }

  getTienda(id: number): Observable<Tienda> {
    return of(Tiendas.find(tienda => tienda.id === id));
  }

  agregarTienda(tienda: Tienda): void {
    tienda.id = this.tiendas.length + 1;
    console.log('Nombres: ' + tienda.nombres);
    console.log('Direccion: ' + tienda.direccion);
    console.log('F. Apertura: ' + tienda.fechaApertura);
    console.log('RUC: ' + tienda.RUC);
    console.log('Matriz: ' + tienda.matriz);
    if (tienda !== undefined) {
      this.tiendas.push(tienda);
    }
    
    console.log('Listando elementos de tiendas');
    this.tiendas.forEach(function (value) {
      console.log("inicia datos *****************************")
      console.log("TIENDA ****** : " + value.nombres + " - " + value.fechaApertura);
      console.log("termina datos *****************************")
    });
  }
}
