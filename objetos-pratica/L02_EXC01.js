var pessoa = {
    nome: 'renan',
    idade: 20,
    solteiro: true,
    hobbies: ['trilha de moto', 'jogar', 'ouvir musica'],
}

function mostrarInfoPessoa(pessoa) {
    console.log(
        typeof pessoa.nome + ' ' + pessoa.nome + '\n' +
        typeof pessoa.idade + ' ' + pessoa.idade + '\n' +
        typeof pessoa.solteiro + ' ' + pessoa.solteiro + '\n' +
        typeof pessoa.hobbies + ' ' + pessoa.hobbies + '\n',
    );

}

mostrarInfoPessoa(pessoa);