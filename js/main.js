//alert("Meu primeiro JS!")
//var nome = "Alan Lucena";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert (nome + "tem" + idade + "anos" );
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 + n2);
//console.log(frase.toLowerCase);
//alert(frase.replace("Japão", "Brasil"));

//var lista = ["maça", "pêra", "abacate"]
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join("|"));

/*var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta)*/
/*var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas)

var d = new Date()
//alert("Digital" + formacoes)
var lista = ["Alemanha", "Inglaterra", "Escócia"]
lista.push("Polonia")
lista.pop()
console.log(lista)
console.log("hoje é dia " + d.getDay() + "/" + (d.getMonth() +1))*/

/*function soma(n1, n2) {
    return n1 + n2;
}

function validaIdade(idade) {
    var valida;
    if(idade >= 18){
        valida = true;
    }else{
        valida = false;
    }
    return valida;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));*/
//alert(soma(5, 10));

function botao() {
    //alert("Obrigado por clicar no botão!")
     document.getElementById("agradecimento").innerHTML= "<b>Obrigado por clicar</b>"
    //console.log(document.getElementById("agradecimento").innerHTML= "<b>Obrigado por clicar</b>")
}
    function redirecionar() {
        //window.open("https://globallabs.ventures/")
        window.location.href = "https://globallabs.ventures/"
    }

    function trocar() {
        document.getElementById("mousemove").innerHTML= "<b>Obrigado passar o mouse</b>"
        //alert("Apareceu o alert!")
    }


