function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function getLivros() {
  const json = localStorage.getItem("meusLivros");
  return json ? JSON.parse(json) : [];
}
function salvarLivros(arr) {
  localStorage.setItem("meusLivros", JSON.stringify(arr));
}
function buscarLivroPorId(id) {
  return getLivros().find(l => l.id === id) || null;
}

const idParam = parseInt(getQueryParam('id'), 10);
const livro    = buscarLivroPorId(idParam);

const form     = document.getElementById('editarForm');
const Titulo = document.getElementById('titulo');
const Autor  = document.getElementById('autor');
const Ano    = document.getElementById('ano');
const Genero = document.getElementById('genero');
const ISBN   = document.getElementById('isbn');
const Pag    = document.getElementById('paginas');
const Editora= document.getElementById('editora');
const Sinopse= document.getElementById('sinopse');
const Nota   = document.getElementById('id_avaliacao');
const btnCancelar= document.getElementById('cancelar');

if (!livro) {
  alert('Livro não encontrado');
  window.location.href = 'index.html';
} else {
  Titulo.value   = livro.titulo;
  Autor.value    = livro.autor;
  Ano.value      = livro.anoPublicacao;
  Genero.value   = livro.genero;
  ISBN.value     = livro.isbn;
  Pag.value      = livro.paginas;
  Editora.value  = livro.editora;
  Sinopse.value  = livro.sinopse;
  Nota.value     = livro.notaUsuario;
}

btnCancelar.addEventListener('click', () => {
  window.location.href = `detalhes.html?id=${idParam}`;
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const livros = getLivros();
  const idx    = livros.findIndex(l => l.id === idParam);
  if (idx === -1) return;

  livros[idx] = {
    ...livros[idx],
    titulo:       Titulo.value.trim(),
    autor:        Autor.value.trim(),
    anoPublicacao: parseInt(Ano.value, 10),
    genero:       Genero.value.trim(),
    isbn:         ISBN.value.trim(),
    paginas:      parseInt(Pag.value, 10) || 0,
    editora:      Editora.value.trim(),
    sinopse:      Sinopse.value.trim(),
    notaUsuario:  parseFloat(Nota.value) || 0,
  };

  salvarLivros(livros);

  window.location.href = `detalhes.html?id=${idParam}`;
});
