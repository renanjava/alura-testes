interface ImpostoState {
    calcularImposto(valorBase: number): { mensagem: string; valorImposto: number; aliquota: number; tipo: string };
}

class ISSState implements ImpostoState {
    calcularImposto(valorBase: number) {
        const aliquota = 0.05;
        const valorImposto = valorBase * aliquota;
        return {
            mensagem: `Cálculo de ISS realizado`,
            valorImposto,
            aliquota,
            tipo: 'ISS'
        };
    }
}

class ICMSState implements ImpostoState {
    calcularImposto(valorBase: number) {
        const aliquota = 0.18;
        const valorImposto = valorBase * aliquota;
        return {
            mensagem: `Cálculo de ICMS realizado`,
            valorImposto,
            aliquota,
            tipo: 'ICMS'
        };
    }
}

class CalculadoraImposto {
    private state: ImpostoState;

    constructor(tipoImposto: string) {
        this.state = this.getState(tipoImposto);
    }

    private getState(tipoImposto: string): ImpostoState {
        switch (tipoImposto) {
            case 'ISS':
                return new ISSState();
            case 'ICMS':
                return new ICMSState();
            default:
                throw new Error(`Tipo de imposto ${tipoImposto} não suportado`);
        }
    }

    setState(tipoImposto: string) {
        this.state = this.getState(tipoImposto);
    }

    calcular(valorBase: number) {
        return this.state.calcularImposto(valorBase);
    }
}

const calculadoraISS = new CalculadoraImposto('ISS');
console.log(calculadoraISS.calcular(1000));

const calculadoraICMS = new CalculadoraImposto('ICMS');
console.log(calculadoraICMS.calcular(1000));