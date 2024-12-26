import { Component, Input, OnInit } from '@angular/core';
import { IPensamento } from '../../../interfaces/pensamento.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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
    modelo: "modelo3"
  }
  constructor() { }

  ngOnInit(): void {

  }

  larguraPensamento(): string{
    return (this.pensamento.conteudo.length >= 256 ? 'pensamento-g' : 'pensamento-p');
  }
}
