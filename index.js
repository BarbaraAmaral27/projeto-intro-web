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
    opcoesPrato1:["Molho Bolonhesa"," Molho Branco"," Molho Madeira"]
}

objeto2 = {
    nome : "Strogonoff",   
    valor:42.50,
    fileComida: false,
    opcoesPrato1:["Carne"," Frango"," Camarão"]
}

objeto3 = {
    nome : "Filé com Legumes na manteiga",   
    valor:65.00,
    fileComida: true,
    opcoesPrato1:["Filé de Frango"," Filé Mignon"]
}

// Exercício 2 - Semana 2

// 2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

comida = []

// Exercício 3

// 3. Adicione os objetos criados no item 1, ao array de objetos criado no item 2, utilizando o push() .

comida.push(objeto1, objeto2, objeto3)
console.log(comida)


// Exercício 4 e // Exercício 5 - Semana 2

// 4. Altere o item 3 “Adicione os novos objetos no array de objetos, utilizando o push()”, para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

if (objeto1.fileComida === true){
    comida.push(objeto1)
}else {
    alert("Objeto 1 não adicionado ao array")
}

if (objeto2.fileComida === true){
    comida.push(objeto2)
}else {
    alert("Objeto 2 não adicionado ao array")
}

if (objeto3.fileComida === true){
    comida.push(objeto3)
}else {
    alert("Obejto 1 não adicionado ao array")
}

console.log(comida)


//--------------------------------------------------------//


//Exercício 1 - Semana 3

//1. Reescrevendo o relatório criado que foi feito na semana 1, altere a forma que a característica do tipo array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.

//Desta forma
let comidaString = ""

for (let i  = 0; i < objeto1.opcoesPrato1.length; i++){
    comidaString += objeto1.opcoesPrato1[i] 
}
console.log(comidaString)


comidaString = ""
for (let i  = 0; i < objeto2.opcoesPrato1.length; i++){
    comidaString += objeto2.opcoesPrato1[i] 
}
console.log(comidaString)


comidaString = ""
for (let i  = 0; i < objeto3.opcoesPrato1.length; i++){
    comidaString += objeto3.opcoesPrato1[i] 
}
console.log(comidaString)
console.log("------------------------");

// //Ou Desta forma

// for (let abacaxi in objeto1) {
//     console.log(objeto1[abacaxi].toString());
// }


//Exercício 2 - Semana 3

//2. Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.

let arrayObjetosComida = [
    {
    nome : "Lagarto ao Molho Madeira",   
    valor: 49.90,
    fileComida: false,
    opcoesPrato1: "Carne"
    },

    {
    nome: "Cupim Recheado",
    valor: 69.90,
    fileComida: false,
    opcoesPrato1: "Carne"
    }
];

console.log("Nome do Prato: " + arrayObjetosComida[1].nome);
console.log("------------------------");

for(comidas of arrayObjetosComida){
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

//Exercício 3 - Semana 4

// 4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

function retornarObjetos(arrayObjetosComida, nomeString){
let guardarNome = ""
    for (comida of arrayObjetosComida) {
        for(detalhes in comida){
            if (comida.nome === nomeString) {
                guardarNome = comida
                console.log(guardarNome);
                return guardarNome
            }else{
                alert ("Nenhum item foi encontrado")
            }
        }
    }
}
retornarObjetos(arrayObjetosComida, "Lagarto ao Molho Madeira")


