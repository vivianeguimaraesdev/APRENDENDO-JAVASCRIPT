//Fazendo a callback usando apenas javascript
//Criando o botão

//Para inserir varios botões com a mesma estrutura base
//Isolamos em uma função

function newButton(text, callback){
    const $body = document.querySelector("body");
    const $button = document.createElement("button");
    $button.textContent = text;
    
    callback($button); // essa função permite estilizarmos o botão antes

    $body.insertAdjacentElement('beforeend', $button); //onde vamos inserir o botão na tela na posição do body

    return $button;
}

// Pode dar o nome que quiser dentro do parametro da arrow function abaixo
//A callback auxilia pois na hora de criar o botão já podemos estilizar ele
//Se não, teriamos que fazer após o return criando váriaveis e etc...aumentando o código.
newButton("Login", (button) => {
    button.style.cssText = `
    font-size: 40px;
    color: blue;
    text-transform: uppercase;
    `

    button.addEventListener("click", () =>{
        console.log("Olá!");
    })
});
newButton("Signup", (button) => {
    button.style.cssText = `
    font-size:80px;
    color: red;
    `
});

//Cadê o callback? Vamos personalizar os botões no css do jeito que quisermos
//Adicionando um evento dentro da função callback dentro da função newButton



