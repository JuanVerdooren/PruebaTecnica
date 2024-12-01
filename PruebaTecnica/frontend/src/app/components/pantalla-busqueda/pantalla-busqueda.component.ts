import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-pantalla-busqueda',
  templateUrl: './src/app/components/pantalla-busqueda/pantalla-busqueda.component.html',
  styleUrls: ['./src/app/components/pantalla-busqueda.component.css']
})
export class PantallaBusquedaComponent {
  tipoDocumento = '';
  numeroDocumento = '';
  botonHabilitado = false;

  // Lista de tipos de documento para un control más fácil en el template
  tiposDocumento: string[] = ['DNI', 'RUC', 'Carnet Extranjería'];

  constructor(private clienteService: ClienteService, private router: Router) {}

  // Verifica que los campos no estén vacíos y que el número de documento tenga un formato válido
  verificarCampos() {
    this.botonHabilitado = this.tipoDocumento !== '' && /^\d{8,11}$/.test(this.numeroDocumento);
  }

  // Llama al servicio y navega al resumen o muestra un error
  buscarCliente() {
    this.clienteService.obtenerCliente({ tipo: this.tipoDocumento, numero: this.numeroDocumento })
      .subscribe(cliente => {
        // Verifica si el cliente existe antes de navegar
        if (cliente) {
          sessionStorage.setItem('cliente', JSON.stringify(cliente));
          this.router.navigate(['/resumen']);
        } else {
          alert('Cliente no encontrado.');
        }
      }, () => {
        alert('Error en el servidor o no se pudo encontrar al cliente.');
      });
  }
}
