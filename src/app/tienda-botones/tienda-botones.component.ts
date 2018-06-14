import { Component, OnInit, Input } from '@angular/core';
import { Tienda } from '../modelo/tienda';
import { TiendaService } from '../servicio/tienda.service';

@Component({
  selector: 'app-tienda-botones',
  templateUrl: './tienda-botones.component.html',
  styleUrls: ['./tienda-botones.component.css']
})
export class TiendaBotonesComponent implements OnInit {
  @Input() tiendas: Tienda[];

  constructor(private tiendaService: TiendaService) {
  }

  ngOnInit() {
    this.tiendaService.getTiendas()
    .subscribe(tiendas => this.tiendas = tiendas);
  }

  onClick(tienda: Tienda) {
    console.log("tienda-botones: " + tienda.nombres);
    this.tiendaService.setTiendaSeleccionada(tienda);
  }
}
