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

// Exercício 1
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

// Exercício 2
comida = []

// Exercício 3
//comida.push(objeto1, objeto2, objeto3)
//console.log(comida)


// Exercício 4 e // Exercício 5
if (objeto1.fileComida === true){
    comida.push(objeto1)
}else {
    alert("Obejeto 1 não adicionado ao array")
}

if (objeto2.fileComida === true){
    comida.push(objeto2)
}else {
    alert("Obejeto 2 não adicionado ao array")
}

if (objeto3.fileComida === true){
    comida.push(objeto3)
}else {
    alert("Obejeto 1 não adicionado ao array")
}

console.log(comida)



