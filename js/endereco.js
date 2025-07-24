function getEndereco(){

let cep = document.getElementById("cep").value; 
let logradouro = document.getElementById("logradouro"); 
let bairro = document.getElementById("bairro"); 
let cidade = document.getElementById("cidade"); 
let estado = document.getElementById("estado"); 
let regiao = document.getElementById("regiao"); 

logradouro.innerText = "Logradouro: ";
bairro.innerText = "Bairro: ";
cidade.innerText = "Cidade: ";
estado.innerText = "Estado: ";
regiao.innerText = "Regiao: ";

const url = `https://viacep.com.br/ws/${cep}/json`

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data);
  if(data.erro){
    logradouro.innerText = 'Cep não encontrado!';
    bairro.innerText = '';
    cidade.innerText = '';
    estado.innerText = '';
    regiao.innerText = '';
    return;
  }

  logradouro.innerText += ' '+data.logradouro;
  bairro.innerText += ' '+data.bairro;
  cidade.innerText += ' '+data.localidade;
  estado.innerText += ' '+data.estado;
  regiao.innerText += ' '+data.regiao;
})
.catch(error => {
    console.error("Erro ao buscar o CEP");
    alert("Erro ao buscar o CEP");
})  
}