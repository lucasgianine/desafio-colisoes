function analisar_colisao() {
    var primeiroX0 = Number(input_primeira_linha_x0.value);
    var primeiroY0 = Number(input_primeira_linha_y0.value);
    var primeiroX1 = Number(input_primeira_linha_x1.value);
    var primeiroY1 = Number(input_primeira_linha_y1.value);

    var segundoX0 = Number(input_segunda_linha_x0.value);
    var segundoY0 = Number(input_segunda_linha_y0.value);
    var segundoX1 = Number(input_segunda_linha_x1.value);
    var segundoY1 = Number(input_segunda_linha_y1.value);

    if (primeiroX0 < primeiroX1
        && primeiroY0 < primeiroY1
        && segundoX0 < segundoX1
        && segundoY0 < segundoY1) {
            if (primeiroX0 < segundoX1
                && primeiroY0 < segundoY1
                && primeiroX1 < segundoX0
                && primeiroY1 < segundoX0) {
                    alert("0");
            } else {
                    alert("1")
            }
    } else {
        alert("Insira um número válido. X0 tem que ser menor que X1, e Y0 tem que ser menor que Y1");
    }
}

// Teste com operadores lógicos.
// Última atualização: 13/04 - adicionando apenas "="