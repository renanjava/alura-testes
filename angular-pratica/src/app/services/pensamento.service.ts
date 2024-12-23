import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPensamento } from '../interfaces/pensamento.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly API = 'localhost:3000/pensamentos'

  constructor(private readonly http: HttpClient) { }

  listar(): Observable<IPensamento[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    return this.http.get<IPensamento[]>(this.API)
  }
}
