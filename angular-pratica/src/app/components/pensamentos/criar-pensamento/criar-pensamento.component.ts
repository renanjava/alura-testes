import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router, RouterModule } from '@angular/router';
import { PensamentoService } from '../../../services/pensamento.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-criar-pensamento',
  imports: [FormsModule, RouterModule, ReactiveFormsModule, CommonModule],
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
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      modelo: ['modelo1']
    })
  }

  criarPensamento(){
    console.log(this.formulario.status);
    if(this.formulario.valid){
      this.pensamentoService.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelarPensamento(){
    this.router.navigate(['/listarPensamento'])
  }

  habilitarBotao(): string{
    if(this.formulario.valid){
      return 'botao'
    }else{
      return 'botao__desabilitado'
    }
  }
}
