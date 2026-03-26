const fs = require("fs");

function getTodosFavoritos() {
  // Define a função getTodosFavoritos
  return JSON.parse(fs.readFileSync("favoritos.json")); // Lê o arquivo "favoritos.json" e retorna o conteúdo como um objeto JavaScript
}

function deletaFavoritoPorId(id) {
  const livros = JSON.parse(fs.readFileSync("favoritos.json")); // Lê o arquivo "favoritos.json" e armazena o conteúdo em uma variável chamada "livros"
  const livrosFiltrados = livros.filter((livro) => livro.id !== id); // Filtra os livros, mantendo apenas aqueles cujo id seja diferente do id fornecido
  fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados)); // Escreve a lista filtrada de livros de volta no arquivo "favoritos.json", convertendo-a para uma string JSON
}

function insereFavorito(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json")); // Lê o arquivo "livros.json" e armazena o conteúdo em uma variável chamada "livros"
  const favoritos = JSON.parse(fs.readFileSync("favoritos.json")); // Lê o arquivo "favoritos.json" e armazena o conteúdo em uma variável chamada "favoritos"

  const livroInserido = livros.find((livro) => livro.id === id);
  const novaListaLivrosDeFavoritos = [...favoritos, livroInserido];
  fs.writeFileSync("favoritos.json",JSON.stringify(novaListaLivrosDeFavoritos)); // Escreve a lista filtrada de livros de volta no arquivo "favoritos.json", convertendo-a para uma string JSON
}

module.exports = {
  getTodosFavoritos,
  deletaFavoritoPorId,
  insereFavorito,
};
