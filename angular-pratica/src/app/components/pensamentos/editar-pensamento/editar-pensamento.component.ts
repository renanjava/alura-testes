import { Component, OnInit } from '@angular/core';
import { IPensamento } from '../../../interfaces/pensamento.interface';
import { PensamentoService } from '../../../services/pensamento.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  imports: [FormsModule],
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent implements OnInit{

  pensamento: IPensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
}

constructor(
  private readonly pensamentoService: PensamentoService,
  private readonly router: Router,
  private readonly activatedRoute: ActivatedRoute
) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.pensamentoService.getById(parseInt(id!)).subscribe((pensamento) => {
        this.pensamento = pensamento
    })
  }

  editarPensamento() {
    this.pensamentoService.editar(this.pensamento).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
    })
  }

  cancelarPensamento() {
    this.router.navigate(['/listarPensamento'])
  }
}
