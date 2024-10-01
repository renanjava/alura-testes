var contaBancaria = {
    titular: 'renan',
    saldo: 17500.00,
    depositar: function (valor) {
        return this.saldo += valor;
    },
    sacar: function (valor) {
        if (valor > this.saldo)
            return console.log("saldo insuficiente");
        else
            return this.saldo -= valor;
    }
}

var cliente = {
    nome: 'renan',
    conta: {
        ...contaBancaria
    }
}

function mostrarSaldo(cliente) {
    return console.log(
        cliente.nome + ' ' + cliente.conta.saldo
    );
}

mostrarSaldo(cliente)
cliente.conta.depositar(2500.00)
mostrarSaldo(cliente)
cliente.conta.sacar(20000.00)
mostrarSaldo(cliente)
cliente.conta.sacar(1.00)
