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

  // Lista de tipos de documento para usar en el select del template
  tiposDocumento: { valor: string, descripcion: string }[] = [
    { valor: 'CC', descripcion: 'Cédula de Ciudadanía' },
    { valor: 'TI', descripcion: 'Tarjeta de Identidad' },
    { valor: 'CE', descripcion: 'Carnet de Extranjería' }
  ];

  constructor(private clienteService: ClienteService, private router: Router) {}

  // Actualiza el estado del botón según los campos
  verificarCampos() {
    this.botonHabilitado = this.tipoDocumento !== '' && /^\d{8,11}$/.test(this.numeroDocumento.trim());
  }

  // Lógica para buscar al cliente y redirigir si se encuentra
  buscarCliente() {
    this.clienteService.obtenerCliente({
      tipo: this.tipoDocumento,
      numero: this.numeroDocumento
    }).subscribe({
      next: cliente => {
        if (cliente) {
          sessionStorage.setItem('cliente', JSON.stringify(cliente));
          this.router.navigate(['/resumen']);
        } else {
          alert('Cliente no encontrado.');
        }
      },
      error: () => {
        alert('Error en el servidor o no se pudo encontrar al cliente.');
      }
    });
  }
}
