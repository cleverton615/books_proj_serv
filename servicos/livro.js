const fs = require("fs");

function getTodosLivros() {
  // Define a função getTodosLivros
  return JSON.parse(fs.readFileSync("livros.json")); // Lê o arquivo "livros.json" e retorna o conteúdo como um objeto JavaScript
}

function getLivroPorId(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));

  const livroFiltrado = livros.filter((livro) => livro.id === id)[0];
  return livroFiltrado;
}

function insereLivro(livroNovo) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));

  const novaListaDeLivros = [...livros, livroNovo];

  fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
}

module.exports = {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
};
