import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Producto } from '../modelo/producto';
import { TiendaService } from '../servicio/tienda.service';
import { Tienda } from '../modelo/tienda';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
  @Input() tienda: Tienda;

  tiendaServ: TiendaService;
  submitted = false;
  model: Producto;
  
  constructor(private tiendaService: TiendaService) {
    this.tiendaServ= tiendaService;

    // this.model = new Producto();
    // this.model.numeroProducto = 1;
    // this.model.nombre = 'Nombre 1';
    // this.model.descripcion = 'Descripcion 1';
    // this.model.precio = 4;
    // this.model.fechaLanzamientoProducto = new Date();
    // this.model.aniosGarantia = 2;
    // this.model.tiendaId = 3;
   }

  ngOnInit() {
    this.nuevoProducto();
    this.model.numeroProducto = 1;
    this.model.nombre = 'Nombre 1';
    this.model.descripcion = 'Descripcion 1';
    this.model.precio = 4;
    this.model.fechaLanzamientoProducto = new Date();
    this.model.aniosGarantia = 2;
    this.model.tiendaId = 3;
  }

  agregarProducto() {
    this.submitted = true;
    this.tiendaServ.agregarProducto(this.model);
    this.nuevoProducto();
  }

  nuevoProducto() {
    this.model = new Producto();
    this.model.numeroProducto;
    this.model.nombre = '';
    this.model.descripcion = '';
    this.model.precio;
    this.model.fechaLanzamientoProducto = new Date();
    this.model.aniosGarantia;
    this.model.tiendaId;
  }
}
