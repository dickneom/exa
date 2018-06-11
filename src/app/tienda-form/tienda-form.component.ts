import { Component, OnInit } from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import {Tienda} from '../modelo/tienda';
import {TiendaService} from '../servicio/tienda.service';

@Component({
  selector: 'app-tienda-form',
  templateUrl: './tienda-form.component.html',
  styleUrls: ['./tienda-form.component.css']
})
export class TiendaFormComponent implements OnInit {
  date = new FormControl(new Date());

  submitted = false;
  model: Tienda;

  constructor(private tiendaService:TiendaService  ) {
   }

  ngOnInit() {
    this.nuevaTienda();
    // this.model = new Tienda();
    // this.model.nombres = 'Tienda';
    // this.model.direccion = 'Direccion';
    // this.model.fechaApertura = new Date();
    // this.model.RUC = 1234567890;
    // this.model.matriz = false;
  }

  grabaTienda() {
    this.submitted = true;
    this.tiendaService.agregarTienda(this.model);
    this.nuevaTienda();
  }

  nuevaTienda() {
    this.model = new Tienda();
    this.model.nombres = '';
    this.model.direccion = '';
    this.model.fechaApertura = new Date();
    this.model.RUC;
    this.model.matriz = false;
    this.submitted = false;
  }

}
