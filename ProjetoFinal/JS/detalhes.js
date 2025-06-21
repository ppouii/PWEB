
function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
function getLivros() {
  const json = localStorage.getItem("meusLivros");
  return json ? JSON.parse(json) : [];
}

function buscarLivroPorId(id) {
  return getLivros().find(l => l.id === id) || null;
}

const idParam     = parseInt(getQueryParam('id'), 10);
const livro       = buscarLivroPorId(idParam);
const capa      = document.getElementById('capaLivro');
const titulo    = document.getElementById('tituloLivro');
const autor    = document.getElementById('autorLivro');
const paginas   = document.getElementById('paginasLivro');
const genero    = document.getElementById('generoLivro');
const avaliacao = document.getElementById('avaliacaoLivro');
const sinopse   = document.getElementById('sinopseLivro');
const sinopseSec  = document.querySelector('.detalhes_sinopse');
const btn_expandir   = document.getElementById('expandir_Sinopse');
const btnVoltar   = document.getElementById('btnVoltar');
const btnEditar   = document.getElementById('btnEditar');

if (!livro) {
  titulo.textContent = 'Livro não encontrado';
} else {

  titulo.textContent     = livro.titulo;
  autor.textContent      = livro.autor;
  paginas.textContent    = livro.paginas || '—';
  genero.textContent     = livro.genero;
  avaliacao.textContent  = livro.notaUsuario != null
    ? livro.notaUsuario.toFixed(1) + ' / 5.0'
    : '—';
  sinopse.textContent    = livro.sinopse || 'Sem sinopse disponível.';

  
  fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(livro.titulo)}&maxResults=1`)
    .then(res => res.json())
    .then(data => {
      const imgUrl = data.items?.[0]?.volumeInfo?.imageLinks?.thumbnail
        || data.items?.[0]?.volumeInfo?.imageLinks?.smallThumbnail
        || 'https://via.placeholder.com/200x300?text=Sem+Capa';
      capa.src = imgUrl;
      capa.alt = `Capa de ${livro.titulo}`;
    })
    .catch(() => {
      capa.src = 'https://via.placeholder.com/200x300?text=Sem+Capa';
      capa.alt = 'Sem capa disponível';
    });
}


btn_expandir.addEventListener('click', () => {
  sinopseSec.classList.toggle('expanded');
  btn_expandir.textContent = sinopseSec.classList.contains('expanded')
    ? 'Mostrar menos'
    : 'Mostrar mais';
});


btn_Voltar.addEventListener('click', () => {
  window.location.href = 'index.html';
});

btn_Editar.addEventListener('click', () => {
  window.location.href = `editar.html?id=${idParam}`;
});
