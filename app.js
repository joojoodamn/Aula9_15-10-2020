const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const BtnSoma = document.getElementById('BtnSoma');
const resultado = document.getElementById('Resultado');

function soma(){
		const n1 = parseInt(num1.value);
    const n2 = parseInt(num2.value);
    const r = n1 + n2;
    resultado.value = r;
    
}

function subtrai(){
		const n1 = parseInt(num1.value);
    const n2 = parseInt(num2.value);
    const r = n1 - n2;
    resultado.value = r;
    
}
function multiplica(){
		const n1 = parseInt(num1.value);
    const n2 = parseInt(num2.value);
    const r = n1 * n2;
    resultado.value = r;
    
}
function dividi(){
		const n1 = parseInt(num1.value);
    const n2 = parseInt(num2.value);
    const r = n1 / n2;
    resultado.value = r;
    
}
