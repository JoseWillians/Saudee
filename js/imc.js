function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const vimc = (peso / (altura ** 2)).toFixed(1);
        let classificacao = '';

        if (vimc < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (vimc <= 24.9) {
            classificacao = 'com o peso ideal.';
        } else if (vimc <= 30) {
            classificacao = 'com sobrepeso';
        } else if (vimc <= 35) {
            classificacao = 'com obesidade grau 1.';
        } else if (vimc => 45) {
            classificacao = 'com obesidade grau 2.';
        } else {
            classificacao = 'com obesidade grau 3. Procure um Médico';
        }
        window.alert(`Calculo: IMC = (${peso}/(${altura}²))\nIMC = ${vimc}`);
        resultado.textContent = `${nome}  seu IMC é de ${vimc} e você está ${classificacao}`;

    } else {

        window.alert('Preencha todos os campos');
    }
    console.log(nome);
    console.log(altura);
    console.log(peso);
    console.log(resultado);
    console.log(calcular);

}
