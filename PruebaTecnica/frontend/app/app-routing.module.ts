import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaBusquedaComponent } from './components/pantalla-busqueda/pantalla-busqueda.component';
import { PantallaResumenComponent } from './components/pantalla-resumen/pantalla-resumen.component';

const routes: Routes = [
  { path: '', component: PantallaBusquedaComponent },
  { path: 'resumen', component: PantallaResumenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
