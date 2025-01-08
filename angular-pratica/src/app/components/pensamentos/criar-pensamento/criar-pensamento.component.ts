import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router';
import { IPensamento } from '../../../interfaces/pensamento.interface';
import { PensamentoService } from '../../../services/pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  imports: [FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent implements OnInit{

  formulario!: FormGroup;

  constructor(
    private readonly pensamentoService: PensamentoService,
    private readonly router: Router,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulário Reativo'],
      autoria: ['buebuebue'],
      modelo: ['modelo1']
    })
  }

  criarPensamento(){
    this.pensamentoService.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelarPensamento(){
    this.router.navigate(['/listarPensamento'])
  }
}
