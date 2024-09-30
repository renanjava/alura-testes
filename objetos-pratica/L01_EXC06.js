const livro = {
    titulo: 'Metafísica',
    autor: 'Luiz Otávio Naufel',
    anoPublicacao: '2009',
    genero: 'Cîencia',
    avaliacao: null,
}

if(!livro.avaliacao) livro.avaliacao = 'bom';
else console.log('livro já possui avaliação')

delete livro.avaliacao;

const livroObj = Object.create({
    ...livro,
    idade: `${new Date().getFullYear() - livro.anoPublicacao}`,
});

console.log(typeof livro);
console.log(typeof livroObj+"\n");

for (chave in livroObj) {
    console.log(chave + ": " + livroObj[chave]);
}
