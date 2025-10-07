//Exercicio 1:

const botaoIncrementar = document.getElementById ("botaoincrementar");
botaoIncrementar.onclick = function contador(){
    const numeroContador = document.getElementById("numerocontador");
    const numeroContadorText = numeroContador.textContent;
    let conversao = Number(numeroContadorText);
    conversao += 1;
    numeroContador.textContent = conversao;
}

const botaoResetar = document.getElementById("botaoresetar");
botaoResetar.onclick = function resetar(){
    const numeroContador = document.getElementById("numerocontador");
    const numeroContadorText = numeroContador.textContent;
    conversao = Number(numeroContadorText);
    conversao = 0;
    numeroContador.textContent = conversao;
}

// Exercicio 2:

const nome = document.getElementById("nome").value;
const botaoSaudacao = document.getElementById("botaosaudacao");
const mensagem = document.getElementById("mensagem");
botaoSaudacao.onclick = function(){
    if(nome!=""){
        let texto = `Olá ${nome}! Seja bem vindo!`;
        mensagem.textContent = texto;
        
    }else{
        let texto = 'Por favor, digite seu nome.'
        mensagem.textContent = texto;
        
    }
}

//Exercicio 3:

let img = document.querySelector("img");

const btn_prev = document.querySelector("#anterior");
const btn_next = document.querySelector("#proxima");
let position_imagem = 0;

const list_images = [
    "https://img.freepik.com/fotos-gratis/close-vertical-de-um-lindo-gato-europeu-de-pelo-curto_181624-34587.jpg?semt=ais_hybrid&w=740&q=80",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSswwvA9WWb2e3ZfFOEMZHik4jQ9MgJGCEDbg&s",
    "https://purina.com.br/sites/default/files/2025-09/racas-de-gato-mais-populares.jpg",
];

btn_next.addEventListener("click", function () {
  if (position_imagem < list_images.length) {
    img.src = list_images[position_imagem];
    position_imagem++;
  }
});

btn_prev.addEventListener("click", function () {
  if (position_imagem !== 0) {
    position_imagem--;
    img.src = list_images[position_imagem];
  } 
});

//Exercicio 4:

let h3 = document.querySelector('h3')

h3.addEventListener('click', function () {
  const div = document.querySelector('div')
  div.classList.toggle('hide')
})

//Exercicio 5:

let input = document.querySelector('input')
let btn = document.querySelector('button')
let lista = document.querySelector('ol')

btn.addEventListener('click', function() {
  const novaTarefa = input.value
  const newItem = document.createElement('li')
  newItem.textContent = novaTarefa

  lista.appendChild(newItem)
})
