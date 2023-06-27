const form = document.querySelector('#formulario');

form.addEventListener('submit', e => {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {          // Falsy value. NaN conta como 'false'
        setResultado("Peso inválido!", false);
        return;
    } else if (!altura) {
        setResultado("Altura inválida!", false);
        return;
    }

    const imc = getValorImc(peso, altura);
    const nivelImc = getImc(imc);
    const msg = `Seu IMC é: ${imc} (${nivelImc})`; 
    setResultado(msg, true);

})

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

function criaP (className) {
    const p = document.createElement('p');
    return p;
}

function getValorImc(peso, altura) {
    const imc =  peso / (altura ** 2);
    return imc.toFixed(2);
}

function getImc(imc) {
    const nivel = ["Abaixo do peso", "Peso Normal", "Sobrepeso", "Obesidade Grau I", "Obesidade Grau II", "Obesidade Grau III"];
    if (imc > 40) return nivel[5];  
    if (imc >= 35) return nivel[4]; 
    if (imc >= 30) return nivel[3]; 
    if (imc >= 25) return nivel[2]; 
    if (imc >= 18.5) return nivel[1]; 
    if (imc < 18.5) return nivel[0]; 
}