const STORAGE_KEY = "meusLivros";

function getLivros() {
  const json = localStorage.getItem(STORAGE_KEY);
  return json ? JSON.parse(json) : [];
}

function salvarLivros(arr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}

function criarCardLivro(livro, indexOriginal) {
  const card = document.createElement("div");
  card.className = "card_livro";

  card.innerHTML = `
    <h3>${livro.titulo}</h3>
    <p><span>Autor:</span> ${livro.autor || "-"}</p>
    <p><span>Ano:</span> ${livro.anoPublicacao || "-"}</p>
    <p><span>Gênero:</span> ${livro.genero || "-"}</p>
    <p><span>Avaliação:</span> ${livro.notaUsuario != null ? livro.notaUsuario.toFixed(1) + ' / 5.0' : '—'}</p>
    <button class="btn_excluir" title="Excluir livro">&times;</button>
  `;

  card.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn_excluir")) return;
    window.location.href = `detalhes.html?id=${livro.id}`;
  });

  card.querySelector(".btn_excluir").addEventListener("click", (e) => {
    e.stopPropagation(); 
    if (confirm(`Excluir "${livro.titulo}"?`)) {
      const todos = getLivros();
      todos.splice(indexOriginal, 1);
      salvarLivros(todos);
      exibirLivros(currentFilter);
    }
  });

  return card;
}

let currentFilter = "";

function exibirLivros(filtro = "") {
  currentFilter = filtro;
  const container = document.getElementById("lista_livros");
  container.innerHTML = "";

  const todos = getLivros();
  const filtrados = todos.filter(l =>
    l.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  if (filtrados.length === 0) {
    container.innerHTML = "<p>Nenhum livro encontrado.</p>";
    return;
  }

  filtrados.forEach(livro => {
    const idx = todos.findIndex(x => x.id === livro.id);
    container.appendChild(criarCardLivro(livro, idx));
  });
}

const inputBusca = document.getElementById("pesquisa");
const btnLimpar  = document.getElementById("limpar");

inputBusca.addEventListener("input", () => {
  exibirLivros(inputBusca.value.trim());
});

btnLimpar.addEventListener("click", () => {
  inputBusca.value = "";
  exibirLivros();
});

window.addEventListener("DOMContentLoaded", () => {
  exibirLivros();
});
