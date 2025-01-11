import { Component, Input, OnInit } from '@angular/core';
import { IPensamento } from '../../../interfaces/pensamento.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PensamentoService } from '../../../services/pensamento.service';

@Component({
  selector: 'app-pensamento',
  imports: [CommonModule, RouterLink],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent implements OnInit{

  @Input()
  pensamento: IPensamento = {
    conteudo: "i love angular",
    autoria: "renan",
    modelo: "modelo3",
    favorito: false,
  }
  constructor(
    private readonly pensamentoService: PensamentoService
  ) { }

  ngOnInit(): void {

  }

  larguraPensamento(): string{
    return (this.pensamento.conteudo.length >= 256 ? 'pensamento-g' : 'pensamento-p');
  }

  mudarIconeFavorito(): string {
    if(this.pensamento.favorito == false)
      return 'inativo'
    else
      return 'ativo'
  }

  atualizarFavoritos() {
    this.pensamentoService.mudarFavorito(this.pensamento).subscribe()
  }
}
