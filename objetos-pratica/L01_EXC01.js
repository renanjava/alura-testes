const livro = {
    titulo: 'Metafísica',
    autor: 'Luiz Otávio Naufel',
    anoPublicacao: '2009',
    genero: 'Cîencia',
}

const livroObj = Object.create(livro);

console.log(typeof livro);
console.log(typeof livroObj+"\n");

for (chave in livro) {
    console.log(chave + ": " + livro[chave]);
}
