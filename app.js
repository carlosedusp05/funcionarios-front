'use strict'

import funcionarios from './funcionarios.json' with {type: 'json'}

function criarCards(dados) {
    const container = document.getElementById('container')
    const card = document.createElement('div')
    const img = document.createElement('img')
    const nome = document.createElement('h1')
    const cargo = document.createElement('h2')
    const pastaImg = "./img/"

    card.classList.add('card');
    img.src = pastaImg + dados.imagem
    img.alt = dados.nome
    nome.textContent = dados.nome 
    nome.classList.add('nome')
    cargo.textContent = dados.cargo
    cargo.classList.add('cargo')

    container.appendChild(card)
    card.appendChild(img)
    card.appendChild(nome)
    card.appendChild(cargo)

    
}

function carregarDados() {
    const conteudo = funcionarios

    conteudo.forEach(criarCards)
}

carregarDados()
