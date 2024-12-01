import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaBusquedaComponent } from './components/pantalla-busqueda/pantalla-busqueda.component';
import { PantallaResumenComponent } from './components/pantalla-resumen/pantalla-resumen.component';

@NgModule({
  declarations: [
    AppComponent,
    PantallaBusquedaComponent,
    PantallaResumenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // Asegúrate de incluir FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
