import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPensamento } from '../interfaces/pensamento.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private readonly http: HttpClient) { }

  listar(pagina: number, filtro: string): Observable<IPensamento[]> {
    const limiteElementosPorPagina = 6
    let params = new HttpParams()
    .set('_page', pagina)
    .set('_limit', limiteElementosPorPagina)
    if(filtro.trim().length > 2) {
      params = params.set('q', filtro)
    }

    return this.http.get<IPensamento[]>(this.API, { params: params})
  }

  criar(pensamento: IPensamento): Observable<IPensamento> {
    return this.http.post<IPensamento>(this.API, pensamento);
  }

  excluir(id: number): Observable<IPensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<IPensamento>(url)
  }

  editar(pensamento: IPensamento): Observable<IPensamento>{
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<IPensamento>(url, pensamento)
  }

  mudarFavorito(pensamento: IPensamento): Observable<IPensamento> {
    pensamento.favorito = !pensamento.favorito
    return this.editar(pensamento)
  }

  getById(id: number): Observable<IPensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<IPensamento>(url)
  }
}
