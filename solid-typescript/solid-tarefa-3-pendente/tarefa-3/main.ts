interface Funcionario {
    nome: string;
    cargaHoraria: number;

    trabalha(): void;
}

interface IFuncionarioEfetivo extends Funcionario {
    salario: number;

    calculaSalarioLiquido(): number;
    calculaParticipacaoDeLucros(lucro: number): number;
}

interface IFuncionarioVoluntario extends Funcionario {
    escreveRelatorio(): void;
}

class FuncionarioEfetivo implements IFuncionarioEfetivo {
    salario: number;
    nome: string;
    cargaHoraria: number;

    constructor(nome: string, cargaHoraria: number, salario: number) {
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
        this.salario = salario;
    }

    trabalha(): void {
        console.log(`Me chamo ${this.nome} e eu trabalho ${this.cargaHoraria} horas por semana`);
    }

    calculaSalarioLiquido(): number {
        const TAXA_DESCONTO = 0.2;
        const desconto = this.salario * TAXA_DESCONTO;
        return this.salario - desconto;
    }
    calculaParticipacaoDeLucros(lucro: number): number {
        return lucro * this.salario;
    }
}

class FuncionarioVoluntario implements IFuncionarioVoluntario {
    orientador: Funcionario;
    nome: string;
    cargaHoraria: number;

    constructor(nome: string, cargaHorariaExtensao: number, funciarioEfetivo: Funcionario) {
        this.nome = nome;
        this.cargaHoraria = cargaHorariaExtensao;
        this.orientador = funciarioEfetivo;
    }

    escreveRelatorio(): void {
        console.log(`Me chamo ${this.nome} e eu escrevo relatórios para o meu orientador ${this.orientador.nome}`);
    }

    trabalha(): void {
        console.log(`Me chamo ${this.nome} e eu pesquiso ${this.cargaHoraria} horas por semana para cumprir na minha graduação`);
    }
}

const funcionarioEfetivo: FuncionarioEfetivo = new FuncionarioEfetivo("João", 40, 2400);
const funcionarioVoluntario: FuncionarioVoluntario = new FuncionarioVoluntario("Enzo", 20, funcionarioEfetivo);

//Efetivo
console.log("nome:", funcionarioEfetivo.nome);
console.log("salário bruto:", funcionarioEfetivo.salario);
console.log("salário líquido:", funcionarioEfetivo.calculaSalarioLiquido());
console.log("salário com PL:", funcionarioEfetivo.calculaParticipacaoDeLucros(2.5), "\n");

//Voluntário
console.log("nome:", funcionarioVoluntario.nome);
funcionarioVoluntario.escreveRelatorio();