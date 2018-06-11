import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  imagenes = [];

  constructor() {
    this.imagenes[0] = {url: '../../assets/images/1.jpg', descripcion: "Primera imagen", texto: 'Texto para la Primera Imagen.'};
    this.imagenes[1] = {url: '../../assets/images/2.jpg', descripcion: "Segunda imagen", texto: 'Texto para la Segunda Imagen.'};
    this.imagenes[2] = {url: '../../assets/images/3.jpg', descripcion: "Tercera imagen", texto: 'Texto para la Tercera Imagen.'};
   }

  ngOnInit() {
  }

}
