import { Component, OnInit } from '@angular/core';
import { IPensamento } from '../../../interfaces/pensamento.interface';
import { PensamentoService } from '../../../services/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  imports: [],
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent implements OnInit{

  pensamento: IPensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private readonly pensamentoService: PensamentoService,
    private readonly router: Router,
    private readonly activatedRouter: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.paramMap.get('id')
    this.pensamentoService.getById(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  excluirPensamento(){
    if(this.pensamento.id) {
      this.pensamentoService.excluir(this.pensamento.id).subscribe(() => {
          this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelarPensamento() {
    this.router.navigate(['/listarPensamento'])
  }

}
