import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { IPensamento } from '../../../interfaces/pensamento.interface';

@Component({
  selector: 'app-criar-pensamento',
  imports: [FormsModule, RouterModule],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent implements OnInit{

  pensamento: IPensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo2',
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(){
    alert("novo pensamento criado")
  }

  cancelarPensamento(){
    alert("pensamento cancelado")
  }
}
