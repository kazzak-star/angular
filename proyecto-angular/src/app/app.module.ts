import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componente/encabezado/encabezado.component';
import { ImagenComponent } from './componente/imagen/imagen.component';
import { FooterComponent } from './componente/footer/footer.component';
import { Columnas2Component } from './componente/columnas2/columnas2.component';
import { Columnas3Component } from './componente/columnas3/columnas3.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ImagenComponent,
    FooterComponent,
    Columnas2Component,
    Columnas3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
