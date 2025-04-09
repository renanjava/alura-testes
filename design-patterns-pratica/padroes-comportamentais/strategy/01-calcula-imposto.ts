function calcularImpostoUm(valorBase: number, tipoImposto: string) {
    let imposto = 0;
    let aliquota = 0;

    if (tipoImposto === 'ISS') {
        aliquota = 0.05;
        imposto = valorBase * aliquota;
    } else if (tipoImposto === 'ICMS') {
        aliquota = 0.18;
        imposto = valorBase * aliquota;
    }

    return {
        mensagem: `Cálculo de ${tipoImposto} realizado`,
        valorImposto: imposto,
        aliquota: aliquota,
        tipo: tipoImposto
    };
}

console.log(calcularImpostoUm(1000, 'ISS'));
console.log(calcularImpostoUm(1000, 'ICMS'));
