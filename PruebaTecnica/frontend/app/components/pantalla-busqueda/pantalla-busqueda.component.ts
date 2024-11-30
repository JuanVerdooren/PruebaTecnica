import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-pantalla-busqueda',
  templateUrl: './pantalla-busqueda.component.html',
  styleUrls: ['./pantalla-busqueda.component.css']
})
export class PantallaBusquedaComponent {
  tipoDocumento: string = '';
  numeroDocumento: string = '';
  botonHabilitado: boolean = false;

  constructor(private clienteService: ClienteService, private router: Router) {}

  verificarCampos() {
    this.botonHabilitado = this.tipoDocumento !== '' && /^\d{8,11}$/.test(this.numeroDocumento);
  }

  buscarCliente() {
    this.clienteService.obtenerCliente(this.tipoDocumento, this.numeroDocumento)
      .subscribe(cliente => {
        sessionStorage.setItem('cliente', JSON.stringify(cliente));
        this.router.navigate(['/resumen']);
      }, error => {
        alert('Cliente no encontrado o error en el servidor.');
      });
  }
}
