import { Component } from '@angular/core';
import { TiendaService } from './servicio/tienda.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Examen';
  tiendas = this.tiendaService.getTiendas();

  constructor(private tiendaService: TiendaService) {

  }
}
