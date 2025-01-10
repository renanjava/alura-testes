import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-paginacao',
  imports: [CommonModule],
  templateUrl: './botao-paginacao.component.html',
  styleUrl: './botao-paginacao.component.css'
})
export class BotaoPaginacaoComponent {
  @Input() haMaisPensamentos: boolean = false

  constructor() { }

  ngOnInit(): void {

  }
}
