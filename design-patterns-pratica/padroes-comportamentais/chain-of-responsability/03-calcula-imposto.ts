abstract class ImpostoHandler {
    protected proximo: ImpostoHandler | null = null;

    setProximo(handler: ImpostoHandler): ImpostoHandler {
        this.proximo = handler;
        return handler;
    }

    handle(valorBase: number, tipoImposto: string): any {
        if (this.proximo) {
            return this.proximo.handle(valorBase, tipoImposto);
        } else {
            return {
                mensagem: `Tipo de imposto '${tipoImposto}' não reconhecido.`,
                valorImposto: 0,
                aliquota: 0,
                tipo: tipoImposto
            };
        }
    }
}

class ISSHandler extends ImpostoHandler {
    handle(valorBase: number, tipoImposto: string): any {
        if (tipoImposto === 'ISS') {
            const aliquota = 0.05;
            const imposto = valorBase * aliquota;
            return {
                mensagem: `Cálculo de ${tipoImposto} realizado`,
                valorImposto: imposto,
                aliquota: aliquota,
                tipo: tipoImposto
            };
        }
        return super.handle(valorBase, tipoImposto);
    }
}

class ICMSHandler extends ImpostoHandler {
    handle(valorBase: number, tipoImposto: string): any {
        if (tipoImposto === 'ICMS') {
            const aliquota = 0.18;
            const imposto = valorBase * aliquota;
            return {
                mensagem: `Cálculo de ${tipoImposto} realizado`,
                valorImposto: imposto,
                aliquota: aliquota,
                tipo: tipoImposto
            };
        }
        return super.handle(valorBase, tipoImposto);
    }
}

const issHandler = new ISSHandler();
const icmsHandler = new ICMSHandler();

issHandler.setProximo(icmsHandler);

function calcularImposto(valorBase: number, tipoImposto: string) {
    return issHandler.handle(valorBase, tipoImposto);
}

console.log(calcularImposto(1000, 'ISS'));
console.log(calcularImposto(1000, 'ICMS'));
