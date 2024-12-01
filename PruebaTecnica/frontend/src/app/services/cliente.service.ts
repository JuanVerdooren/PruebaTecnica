import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'http://localhost:8090/api/clientes';

  constructor(private http: HttpClient) {}

  obtenerCliente(tipo: string, numero: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${tipo}/${numero}`);
  }
}
