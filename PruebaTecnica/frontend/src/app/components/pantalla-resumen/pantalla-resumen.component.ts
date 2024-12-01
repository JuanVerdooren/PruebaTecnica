import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-resumen',
  templateUrl: './pantalla-resumen.component.html',
  styleUrls: ['./pantalla-resumen.component.css']
})
export class PantallaResumenComponent implements OnInit {
  cliente: any = {};

  constructor(private router: Router) {}

  ngOnInit() {
    const datosGuardados = sessionStorage.getItem('cliente');
    if (datosGuardados) {
      this.cliente = JSON.parse(datosGuardados);
    }
  }

  volver() {
    this.router.navigate(['/']);
  }
}
