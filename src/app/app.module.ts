import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgmaterialModule } from './ng-material/ng-material.module';

import { AppComponent } from './app.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { TiendaFormComponent } from './tienda-form/tienda-form.component';
import { TiendaBotonesComponent } from './tienda-botones/tienda-botones.component';
import { TiendaInfoComponent } from './tienda-info/tienda-info.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';
import { TablaComponent } from './tabla/tabla.component';

import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    TiendaFormComponent,
    TiendaBotonesComponent,
    TiendaInfoComponent,
    ProductoFormComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    NgmaterialModule,
    PanelModule,
    CardModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    CheckboxModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
