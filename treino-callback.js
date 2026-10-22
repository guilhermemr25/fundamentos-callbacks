console.log("\n===== Exercício 01 =====")
function saudacao() {
    console.log("Olá! Bem-vindo ao Back-End com Node.js!");
}

function executar(callback) {
    console.log("Iniciando processo...");
    callback();
}

executar(saudacao);

//////////////////////////////////////////////////////////////

console.log("\n===== Exercício 02 =====")
function calcularDobro(numero, callbackResultado) {
    const dobro = numero * 2;
    callbackResultado(dobro);
}

function imprimirFormatado(valor) {
    console.log(`O valor calculado é ${valor}`);
}

calcularDobro(10, imprimirFormatado);

//////////////////////////////////////////////////////////////

console.log("\n===== Exercício 03 =====")
function operar(a, b, operacaoCallback) {
    return operacaoCallback(a, b);
}

function soma(x, y) {
    return x + y;
}

function multiplicacao(x, y) {
    return x * y;
}

const resultSoma = operar(10, 4, soma);
const resultMult = operar(10, 4, multiplicacao);

console.log(`Soma: ${resultSoma}`);
console.log(`Multiplicação: ${resultMult}`);

//////////////////////////////////////////////////////////////

console.log("\n===== Exercício 04 =====")
function processarTexto(texto, callbackModificadora) {
    callbackModificadora(texto);
}

processarTexto("senai valinhos", (t) => {
    console.log(`Texto processado: ${t.toUpperCase()}`);
});

//////////////////////////////////////////////////////////////

console.log("\n===== Exercício 05 =====")
function simularDownload(nomeArquivo, callbackConclusao) {
    console.log(`Iniciando download de [${nomeArquivo}]...`);

    setTimeout(() => {
        callbackConclusao();
    }, 1500);
}

simularDownload("dados_clientes.csv", () => {
    console.log("✅ Download finalizado com sucesso no disco!");
});
console.log("Node.js Linha seguinte executada imediatamente sem travar!");
