var calculadora = {
    soma: function (a, b) {
        return a + b;
    },

    subtracao: function (a, b) {
        return a - b;
    },

    multiplicacao: function (a, b) {
        return a * b;
    },

    divisao: function (a, b) {
        return a / b;
    },

    calcularMedia: function (numeros) {
        const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
        return soma / numeros.length
    }
}

console.log(
    calculadora.soma(2, 2),
    calculadora.subtracao(2, 2),
    calculadora.multiplicacao(2, 2),
    calculadora.divisao(2, 2),
    calculadora.calcularMedia([10.5, 9.5, 10])
)