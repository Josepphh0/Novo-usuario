function calculoIMC() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const mensagem = document.getElementById("mensagem");

    if (!peso || !altura || altura <= 0) {
      mensagem.textContent = "Por favor, preencha todos os campos.";
      mensagem.className = "erro";
      return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Peso normal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else if (imc < 35) classificacao = "Obesidade grau 1";
    else if (imc < 40) classificacao = "Obesidade grau 2";
    else classificacao = "Obesidade grau 3";

    mensagem.textContent = `Seu IMC é ${imc.toFixed(2)} ${classificacao}`;
    mensagem.className = "sucesso";
  }