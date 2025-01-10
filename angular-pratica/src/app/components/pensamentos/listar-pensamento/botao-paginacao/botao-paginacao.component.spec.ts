import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoPaginacaoComponent } from './botao-paginacao.component';

describe('BotaoPaginacaoComponent', () => {
  let component: BotaoPaginacaoComponent;
  let fixture: ComponentFixture<BotaoPaginacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoPaginacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoPaginacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
