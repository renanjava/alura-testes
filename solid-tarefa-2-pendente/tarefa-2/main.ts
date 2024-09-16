{
    const GANHO_POR_HORA_CLT = 24;
    const CARGA_HORARIA_DIARIA_CLT = 8;

    const GANHO_POR_HORA_ESTAGIARIO = 14;
    const CARGA_HORARIA_DIARIA_ESTAGIARIO = 4;

    const GANHO_POR_HORA_PJ = 30;
    const CARGA_HORARIA_DIARIA_PJ = 8;

    const MES_COMERCIAL = 20; //dias trabalhados no mês

    interface ContratoRemuneravel{
        titulo: string;
    
        remuneracao():number;
    }
    
    class ContratoClt implements ContratoRemuneravel{
        titulo: string = 'CLT';

        remuneracao(): number {
            return GANHO_POR_HORA_CLT * CARGA_HORARIA_DIARIA_CLT * MES_COMERCIAL;
        }
    }

    class Estagio implements ContratoRemuneravel{
        titulo: string = 'Estágio';

        remuneracao(): number {
            return GANHO_POR_HORA_ESTAGIARIO * CARGA_HORARIA_DIARIA_ESTAGIARIO * MES_COMERCIAL;
        }
    }

    class Pj implements ContratoRemuneravel{
        titulo: string = 'PJ';

        remuneracao(): number {
            return GANHO_POR_HORA_PJ * CARGA_HORARIA_DIARIA_PJ * MES_COMERCIAL;
        }
    }

    class FolhaDePagamento {
        static calcularSalarioMensal(funcionario: ContratoRemuneravel): number {
            return funcionario.remuneracao();
        }
    }

    const funcionarioClt = new ContratoClt();
    const funcionarioEstagiario = new Estagio();
    const funcionarioPj = new Pj();

    console.log(`Sou ${funcionarioClt.titulo} e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(funcionarioClt)}`)
    console.log(`Sou ${funcionarioEstagiario.titulo} e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(funcionarioEstagiario)}`)
    console.log(`Sou ${funcionarioPj.titulo} e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(funcionarioPj)}`)
}