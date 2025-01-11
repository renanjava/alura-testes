import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { CommonModule } from '@angular/common';
import { IPensamento } from '../../../interfaces/pensamento.interface';
import { PensamentoService } from '../../../services/pensamento.service';
import { BotaoPaginacaoComponent } from './botao-paginacao/botao-paginacao.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-pensamento',
  imports: [RouterModule, PensamentoComponent, CommonModule, BotaoPaginacaoComponent, FormsModule],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent implements OnInit{

  listaPensamentos: IPensamento[] = [];
  paginaAtual: number = 1
  haMaisPensamentos: boolean = true
  campoFiltro: string = ''
  favoritos: boolean = false
  listaFavoritos: IPensamento[] = []

  constructor(
    private readonly pensamentoService: PensamentoService,
    private readonly router: Router
  ){}

  ngOnInit(): void {
    this.pensamentoService.listar(this.paginaAtual, this.campoFiltro, this.favoritos)
    .subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    });
  }

  carregarMaisPensamentos(){
    this.pensamentoService.listar(++this.paginaAtual, this.campoFiltro, this.favoritos)
    .subscribe((listaPensamentos) => {
      this.listaPensamentos.push(...listaPensamentos)
      if(!listaPensamentos.length){
        this.haMaisPensamentos = false
      }
    })
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.pensamentoService.listar(this.paginaAtual, this.campoFiltro, this.favoritos)
    .subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos
    })
  }

  recarregarComponente() {

    this.favoritos = false
    this.paginaAtual = 1

    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }

  listarFavoritos() {
    this.favoritos = true
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.pensamentoService.listar(this.paginaAtual, this.campoFiltro, this.favoritos)
    .subscribe(listaPensamentosFavoritos => {
      this.listaPensamentos = listaPensamentosFavoritos
      this.listaFavoritos = listaPensamentosFavoritos
    })
  }
}
