import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../servicio/tienda.service';
import { Tienda } from '../modelo/tienda';

@Component({
  selector: 'app-tienda-info',
  templateUrl: './tienda-info.component.html',
  styleUrls: ['./tienda-info.component.css']
})
export class TiendaInfoComponent implements OnInit {
  tienda: Tienda;

  constructor(private tiendaService: TiendaService) { }

  ngOnInit() {
    this.tiendaService.getTienda(3)
      .subscribe(tienda => this.tienda = tienda);
  }

}
