import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router';
import { IPensamento } from '../../../interfaces/pensamento.interface';
import { PensamentoService } from '../../../services/pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  imports: [FormsModule, RouterModule],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent implements OnInit{

  pensamento: IPensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }
  constructor(
    private readonly pensamentoService: PensamentoService, 
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.pensamentoService.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelarPensamento(){
    this.router.navigate(['/listarPensamento'])
  }
}
