//function expression

//essaPalavraEUmPalindromo();

const essaPalavraEUmPalindromo = function() {
    var palavra = "rever";
    var separandoAsLetrasDaPalavra = palavra.split("");
    var palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");

    if (palavra == palavraInvertida) {
        console.log("A palavra " + palavra + " é um palíndomo.");
    } else {
        console.log("A palavra " + palavra + " não é um palíndomo.");
    }

}

essaPalavraEUmPalindromo();