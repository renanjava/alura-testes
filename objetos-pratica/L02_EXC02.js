var pessoa = {
    nome: 'renan',
    idade: 20,
    solteiro: true,
    hobbies: ['trilha de moto', 'jogar', 'ouvir musica'],
}

pessoa = {
    ...pessoa,
    endereco: {
        rua: 'itambe',
        cidade: 'itambe',
        estado: 'itambe',
    },
}

function mostrarInfoPessoa(pessoa) {
    console.log(
        typeof pessoa.nome + ' ' + pessoa.nome + '\n' +
        typeof pessoa.idade + ' ' + pessoa.idade + '\n' +
        typeof pessoa.solteiro + ' ' + pessoa.solteiro + '\n' +
        typeof pessoa.hobbies + ' ' + pessoa.hobbies + '\n',
        typeof pessoa.endereco.rua + ' ' + pessoa.endereco.rua + '\n' +
        typeof pessoa.endereco.cidade + ' ' + pessoa.endereco.cidade + '\n' +
        typeof pessoa.endereco.estado + ' ' + pessoa.endereco.estado + '\n',
    );

}

mostrarInfoPessoa(pessoa);