interface ImpostoStrategy {
    aliquota: number;
    tipo: string;
    calcular(valorBase: number): number;
}

class ISS implements ImpostoStrategy {
    aliquota: number = 0.05;
    tipo: string = 'ISS';
    calcular(valorBase: number): number {
        return valorBase * this.aliquota;
    }
}

class ICMS implements ImpostoStrategy {
    aliquota: number = 0.18;
    tipo: string = 'ICMS';
    calcular(valorBase: number): number {
        return valorBase * this.aliquota;
    }
}

function calcularImpostoDois(valorBase: number, estrategia: ImpostoStrategy): {
    mensagem: string;
    valorImposto: number;
    aliquota: number;
    tipo: string;
} {
    const imposto = estrategia.calcular(valorBase);
    return {
        mensagem: `Cálculo de ${estrategia.tipo} realizado`,
        valorImposto: imposto,
        aliquota: estrategia.aliquota,
        tipo: estrategia.tipo
    };
}

const iss = new ISS();
const icms = new ICMS();

console.log(calcularImpostoDois(1000, iss));
console.log(calcularImpostoDois(1000, icms));