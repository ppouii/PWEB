const STORAGE_KEY = "meusLivros";

function getLivros() {
  const livrosString = localStorage.getItem(STORAGE_KEY);
  return livrosString ? JSON.parse(livrosString) : [];
}

function salvarLivros(livros) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(livros));
}

function adicionarLivro(livro) {
  const livros = getLivros();
  livros.push(livro);
  salvarLivros(livros);
}

function gerarNovoId() {
  const livros = getLivros();
  if (livros.length === 0) return 1;
  const ids = livros.map(l => l.id);
  return Math.max(...ids) + 1;
}

function buscarLivroPorId(id) {
  const livros = getLivros();
  return livros.find(l => l.id === id) || null;
}
