var pessoa1 = {
    nome: 'renan',
    idade: 20,
    solteiro: true,
    hobbies: ['trilha de moto', 'jogar', 'ouvir musica'],
}

var pessoa2 = {
    nome: 'renan2',
    idade: 20,
    solteiro: true,
    hobbies: ['trilha de moto', 'jogar', 'ouvir musica'],
}

var pessoa3 = {
    nome: 'renan3',
    idade: 20,
    solteiro: true,
    hobbies: ['trilha de moto', 'jogar', 'ouvir musica'],
}

pessoa1 = insereEndereco(pessoa1)
pessoa2 = insereEndereco(pessoa2)
pessoa3 = insereEndereco(pessoa3)

pessoas = [
    { ...pessoa1 },
    { ...pessoa2 },
    { ...pessoa3 },
]

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

function mostrarListaPessoas(pessoas) {
    pessoas.forEach(pessoa => {
        mostrarInfoPessoa(pessoa)
    })
}

function insereEndereco(pessoa) {
    return {
        ...pessoa,
        endereco: {
            rua: 'itambe',
            cidade: 'itambe',
            estado: 'itambe',
        },
    }
}

function filtrarPorCidade(pessoas, cidade) {
    return pessoas.filter(e => {
        return e.endereco.cidade === cidade
    })
}

mostrarListaPessoas(pessoas);

pessoas.push(
    insereEndereco(
        {
            nome: 'renanPUSH',
            idade: 20,
            solteiro: true,
            hobbies: ['trilha de motoPUSH', 'jogarPUSH', 'ouvir musicaPUSH'],
        }
    )
)
mostrarListaPessoas(pessoas);
pessoas[3].endereco.cidade = 'itambe2'
console.log(filtrarPorCidade(pessoas, 'itambe'))