// Para utilizar BOOTSTRAP
// Agregado al index.html, el css de bootstrap
// <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
// Instalar ng-bootstrap
// npm install --save @ng-bootstrap/ng-bootstrap
// En app.module.ts importar el modulo NgbModule y agregarlo a los imports
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// @NgModule({
//   declarations: [AppComponent, ...],
//   imports: [NgbModule.forRoot(), ...],
//   bootstrap: [AppComponent]
// })
// export class AppModule {
// }

// Para utilizar angular-material
// Instalar angular-material
// npm install --save @angular/material @angular/cdk
// npm install --save @angular/animations
// npm install --save hammerjs
// En app.modules.ts importar BrowserAnimationsModule
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// imports: [BrowserAnimationsModule],
// Crear el modulo NgMaterial e importar los modulos de angular-material que se requieren
// Importrar el modulo NgMaterial en app.module.ts
// Agregar un tema predefinido en styles.css
// @import "~@angular/material/prebuilt-themes/indigo-pink.css";

// Para utilizar primeNG
// Instalar PrimeNG
// npm install primeng --save
// npm install primeicons --save
// npm install @angular/animations --save
// Agregar las dependencias en la session styles de  angular.json (en versiones anteriores angular-cli.json)
// de acuerdo a la documentacion tambien
// hay que acerlo en index.html (Creo que en uno de los dos es suficiente, hay que probar)
// <link rel="stylesheet" type="text/css" href="/node_modules/primeicons/primeicons.css" />
// <link rel="stylesheet" type="text/css" href="/node_modules/primeng/resources/themes/omega/theme.css" />
// <link rel="stylesheet" type="text/css" href="/node_modules/primeng/resources/primeng.min.css" />
// Con estos pasos me sale que no se puede localizar los archivos indicados.
// Para solucionar esto: copie los modulos primeng y primeicons al directorio src/assets
// y agregue en la seccion styles de angular.json
// "src/assets/primeicons/primeicons.css",
// "src/assets/primeng/resources/themes/omega/theme.css",
// "src/assets/primeng/resources/primeng.min.css"
// y en el index.html agregue
// <link rel="stylesheet" type="text/css" href="assets/primeng/resources/primeng.min.css" />
// <link rel="stylesheet" type="text/html" href="assets/primeng/resources/themes/omega/theme.css" />
// <link rel="stylesheet" type="text/html" href="assets/primeicons/primeicons.css" />



import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


// Generar modelo:
// ng generate class tienda
// ng generate class producto
// ng generate class tiendas (Para simular datos ingresados)
// ng generate service tienda
// Generar los componentes:
// ng generate component carrusel
// ng generate component tienda-form
// ng generate component tienda-botones
// ng generate component producto-form
// ng generate component tienda-info
// ng generate component tabla