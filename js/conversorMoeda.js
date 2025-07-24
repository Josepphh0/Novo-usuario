async function Converter(){
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("from-currency").value;
    const to = document.getElementById("to-currency").value;
    const resultado = document.getElementById("resultado");

    let api = "https://api.frankfurter.app/latest?amount="+amount+"&from="+from+"&to="+to;

    try {
        const response = await fetch(api);
        const data = await response.json();

        if (!data.rates || !data.rates[to]) {
            throw new Error('Conversão não disponível.');
        }

        resultado.innerText = data.rates[to];
    } catch(error) {
        console.log("Alerta, " + error);
        resultado.innerText = "Erro ao converter: " + error.message;
    }
}
