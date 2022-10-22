// const comida1 = "Parmegiana";
// const valorComida1 = 45.00;
// const fileComida1 = true;
// const opcoesPrato1 = ["Molho Bolonhesa"," Molho Branco"," Molho Madeira"]

// const comida2 = "Strogonoff";
// const valorComida2 = 42.50;
// const fileComida2 = false;
// const opcoesPrato2 = ["Carne"," Frango"," Camarão"]

// const comida3 = "Filé com Legumes na manteiga";
// const valorComida3 = 65.00;
// const fileComida3 = true;
// const opcoesPrato3 = ["Filé de Frango"," Filé Mignon"]

// const media = ((valorComida1 + valorComida2 + valorComida3)/3)

// console.log("A média dos pratos é: R$" + media)

// const verificaComidas = (fileComida1 && fileComida2 && fileComida3)
// console.log("Os valores das váriaveis são: " + verificaComidas);

// const comidaMaiuscula1 = comida1.toLocaleUpperCase()
// const comidaMaiuscula2 = comida2.toLocaleUpperCase()
// const comidaMaiuscula3 = comida3.toLocaleUpperCase()

// console.log(comidaMaiuscula1 + "\nValor do Prato: R$" + valorComida1 + "\nÉ filé Mignon: " + fileComida1 + "\nOpções do prato: " + opcoesPrato1)
// console.log(comidaMaiuscula2 + "\nValor do Prato: R$" + valorComida2 + "\nÉ filé Mignon: " + fileComida2 + "\nOpções do prato: " + opcoesPrato2)
// console.log(comidaMaiuscula3 + "\nValor do Prato: R$" + valorComida3 + "\nÉ filé Mignon: " + fileComida3 + "\nOpções do prato: " + opcoesPrato3)

// Exercício 1 - Semana 2

// 1. Transforme os itens que criamos nas últimas semanas em objetos.
objeto1 = {
    nome : "Parmegiana",
    valor:45.00,
    fileComida: true,
    opcoes:["Molho Bolonhesa"," Molho Branco"," Molho Madeira"],
    imagem: "./imagens/parmegiana1.webp"
}

objeto2 = {
    nome : "Strogonoff",
    valor:42.50,
    fileComida: false,
    opcoes:["Carne"," Frango"," Camarão"],
    imagem: "./imagens/strogonoff.jpg"
}

objeto3 = {
    nome : "Filé com Legumes na manteiga",
    valor:65.00,
    fileComida: true,
    opcoes:["Filé de Frango"," Filé Mignon"],
    imagem: "./imagens/file.jpg"
}

//Calculo média dos valores dos objetos
const media = (objeto1.valor + objeto2.valor + objeto3.valor)/3
console.log("A média dos pratos é: R$" + media.toFixed(2))

// Exercício 2 - Semana 2

// 2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

comida = []

// Exercício 3 - Semana 2

// 3. Adicione os objetos criados no item 1, ao array de objetos criado no item 2, utilizando o push() .

comida.push(objeto1, objeto2, objeto3)
console.log(comida)

// Exercício 4 e // Exercício 5 - Semana 2

// 4. Altere o item 3 “Adicione os novos objetos no array de objetos, utilizando o push()”, para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

//5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push

if (objeto1.fileComida === true){
    comida.push(objeto1)
    console.log(objeto1.fileComida)
}else {
    alert("Objeto 1 não adicionado ao array")
}

if (objeto2.fileComida === true){
    comida.push(objeto2)
    console.log(objeto2.fileComida)
}else {
    alert("Objeto 2 não adicionado ao array")
}

if (objeto3.fileComida === true){
    comida.push(objeto3)
    console.log(objeto3.fileComida)
}else {
    alert("Obejto 3 não adicionado ao array")
}

console.log(comida)


//--------------------------------------------------------//

//Exercício 1 - Semana 3

//1. Reescrevendo o relatório criado que foi feito na semana 1, altere a forma que a característica do tipo array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.

//Desta forma

let comidaString = ""
for (let i = 0; i < objeto1.opcoes.length; i++){
    comidaString += objeto1.opcoes[i]
}
console.log(comidaString)


comidaString = ""
for (let i  = 0; i < objeto2.opcoes.length; i++){
    comidaString += objeto2.opcoes[i]
}
console.log(comidaString)


comidaString = ""
for (let i  = 0; i < objeto3.opcoes.length; i++){
    comidaString += objeto3.opcoes[i]
}
console.log(comidaString)
console.log("------------------------");

// //Ou Desta forma

// for (let propriedade in objeto1) {
//     console.log(objeto1[propriedade].toString());
// }


//Exercício 2 - Semana 3

//2. Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.

objeto4 = {
    nome : "Risoto de Queijo ",
    valor: 41.90,
    fileComida: false,
    opcoes: "Queijo, Frango, Palmito",
    imagem: "./imagens/risoto.jpg" 
}

objeto5 = {
    nome : "Lagarto ao Molho Madeira",
    valor: 49.90,
    fileComida: false,
    opcoes: "Carne",
    imagem: "./imagens/lagarto.jpg"
}

objeto6 = {
    nome : "Cupim Recheado",
    valor: 55.90,
    fileComida: false,
    opcoes: "Carne",
    imagem: "./imagens/cupim.jpg"
}

comida.push(objeto4, objeto5, objeto6)

console.log("Nome do Prato: " + comida[1].nome);
console.log("------------------------");

for(comidas of comida){
    for (propriedade in comidas){
        console.log(`${propriedade}: ${comidas[propriedade]}`)
    }
    console.log("------------------------");
}

//Exercício 3 - Semana 3

// 3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.

function funcaoString(objetoString){

        for (propriedade in objetoString){
            console.log(`${propriedade}: ${objetoString[propriedade]}`)
        }
        console.log("------------------------");
    }

funcaoString(objeto3);

//Exercício 4 - Semana 3

// 4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.
function outraFuncao(array, nomeNovoOutro){
    let stringNomeOutra
    for (item of array){
        if(item.nome === nomeNovoOutro){
            stringNomeOutra = item
        }
    }
        if(stringNomeOutra){
            console.log(stringNomeOutra) 
        }else{
            alert ('Nenhum item encontrado')
        }      
}

outraFuncao(comida, "Filé com Legumes na manteiga")
outraFuncao(comida, "Parmegiana")


console.log("------------------------");

//Semana 6 - final

//Array de objetos criado para usar na criação dos cards do html
arraysHtml = []
arraysHtml.push(objeto1, objeto2, objeto3, objeto4, objeto5, objeto6)
console.log(arraysHtml)

//1. Altere seu código para que a tela de lista de itens crie os elementos da lista através de manipulação do DOM.
function createHtml(array){
let criarContainer = document.getElementsByClassName('container-cards')[0]
    criarContainer.innerHTML=""
    let card = ""
    array.map(element => {
    card = `<section class="card">
        <img src="${element.imagem}">
        <ul>
            <li>Nome: ${element.nome.toUpperCase()}</li>
            <li>Valor: ${element.valor}</li>
            <li>FileComida: ${element.fileComida}</li>
            <li>Opções: ${element.opcoes}</li>
        </ul>
        </section>`
        criarContainer.innerHTML+= card;
    });
}
createHtml(arraysHtml)

//Buscar objetos dentro do meu array, através do campo pesquisar
function pesquisarArrayPorNome(array, nomePrato){
    const filtrar = array.filter((item) => item.nome.toLowerCase().includes(nomePrato.toLowerCase()));

    if (filtrar.length){
        return filtrar;
    }else{
        return array;
    }  
}

//Limpar campos de pesquisa
function limparCamposInput(){
    document.getElementById("pesquisa").value="";
} 

//Função que pega o valor do input, fazendo a chamada da função que pesquisa os objetos do meu array
function pesquisarNome(event){
    event.preventDefault()

    const input = document.getElementById("pesquisa").value;
    const filtrarNome = pesquisarArrayPorNome(arraysHtml, input);

    if(input === ''){
        alert('Digite um nome válido!');
        createHtml(arraysHtml);
    }else{
        console.log(filtrarNome);
        createHtml(filtrarNome);
    }
    console.log(filtrarNome.includes(input));
    limparCamposInput()
}

//Botão Enter para efetuar pesquisa no meu input
const botaoInput = document.getElementById("pesquisa"); 
botaoInput.addEventListener("keyup", function(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        document.getElementById("buscar").click();
    }
})




