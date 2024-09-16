{
    const MES_COMERCIAL = 20; //dias trabalhados no mês

    interface ContratoRemuneravel{
        titulo: string;
        remuneracao():number;
    }

    class ContratoClt implements ContratoRemuneravel{
        titulo: string = 'CLT';
        private _GANHO_POR_HORA_CLT = 24;
        private _CARGA_HORARIA_DIARIA_CLT = 8;

        remuneracao(): number {
            return this._GANHO_POR_HORA_CLT * this._CARGA_HORARIA_DIARIA_CLT;
        }
    }

    class Estagio implements ContratoRemuneravel{
        titulo: string = 'Estágio';
        private _GANHO_POR_HORA_ESTAGIARIO = 14;
        private _CARGA_HORARIA_DIARIA_ESTAGIARIO = 4;

        remuneracao(): number {
            return this._GANHO_POR_HORA_ESTAGIARIO * this._CARGA_HORARIA_DIARIA_ESTAGIARIO;
        }
    }

    class Pj implements ContratoRemuneravel{
        titulo: string = 'PJ';
        private _GANHO_POR_HORA_PJ = 30;
        private _CARGA_HORARIA_DIARIA_PJ = 8;

        remuneracao(): number {
            return this._GANHO_POR_HORA_PJ * this._CARGA_HORARIA_DIARIA_PJ;
        }
    }

    class FolhaDePagamento {
        static calcularSalarioMensal(funcionario: ContratoRemuneravel): number {
            return funcionario.remuneracao() * MES_COMERCIAL;
        }
    }

    const funcionarioClt = new ContratoClt();
    const funcionarioEstagiario = new Estagio();
    const funcionarioPj = new Pj();

    console.log(`Sou ${funcionarioClt.titulo} e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(funcionarioClt)}`)
    console.log(`Sou ${funcionarioEstagiario.titulo} e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(funcionarioEstagiario)}`)
    console.log(`Sou ${funcionarioPj.titulo} e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(funcionarioPj)}`)
}