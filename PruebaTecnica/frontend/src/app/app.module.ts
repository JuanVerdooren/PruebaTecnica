import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { PantallaBusquedaComponent } from './components/pantalla-busqueda/pantalla-busqueda.component';
import { PantallaResumenComponent } from './components/pantalla-resumen/pantalla-resumen.component';

@NgModule({
  declarations: [
    AppComponent,  // Declaramos AppComponent
    PantallaBusquedaComponent,
    PantallaResumenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Asegúrate de incluir AppRoutingModule aquí
    HttpClientModule,
    FormsModule  // Asegúrate de incluir FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]  // AppComponent es el componente principal
})
export class AppModule { }
