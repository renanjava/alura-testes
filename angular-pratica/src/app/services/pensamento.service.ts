import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPensamento } from '../interfaces/pensamento.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private readonly http: HttpClient) { }

  listar(): Observable<IPensamento[]> {
    return this.http.get<IPensamento[]>(this.API)
  }

  criar(pensamento: IPensamento): Observable<IPensamento> {
    return this.http.post<IPensamento>(this.API, pensamento);
  }
}
