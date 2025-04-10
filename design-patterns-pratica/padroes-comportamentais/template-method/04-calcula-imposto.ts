abstract class CalculadoraImposto {
    calcular(valorBase: number) {
        const aliquota = this.getAliquota();
        const tipo = this.getTipo();
        const imposto = valorBase * aliquota;

        return {
            mensagem: `Cálculo de ${tipo} realizado`,
            valorImposto: imposto,
            aliquota: aliquota,
            tipo: tipo
        };
    }

    protected abstract getAliquota(): number;
    protected abstract getTipo(): string;
}

class CalculadoraISS extends CalculadoraImposto {
    protected getAliquota(): number {
        return 0.05;
    }

    protected getTipo(): string {
        return 'ISS';
    }
}

class CalculadoraICMS extends CalculadoraImposto {
    protected getAliquota(): number {
        return 0.18;
    }

    protected getTipo(): string {
        return 'ICMS';
    }
}

const iss = new CalculadoraISS();
const icms = new CalculadoraICMS();

console.log(iss.calcular(1000));
console.log(icms.calcular(1000));
