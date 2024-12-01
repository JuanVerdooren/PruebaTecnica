import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'http://localhost:8090/api/clientes';

  constructor(private http: HttpClient) {}

  obtenerCliente({ tipo, numero }: { tipo: string; numero: string; }): Observable<unknown> {
    return this.http.get<unknown>(`${this.baseUrl}/${tipo}/${numero}`);
  }
}
