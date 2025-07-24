let usuarioCadastrado = "";
let senhaCadastrada = "";

function cadastrar() {
  const nome = document.getElementById("nomeCompleto").value;
  const cidade = document.getElementById("cidade").value;
   const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const msg = document.getElementById("mensagem");

  if (!nome || !cidade || !email || !senha) {
    msg.textContent = "Por favor, preencha todos os campos.";
    msg.className = "mensagem erro";
    return;
  }
  
  localStorage.setItem("usuarioEmail", email);
  localStorage.setItem("usuarioSenha", senha);

  msg.textContent = "Conta criada com sucesso!";
  msg.className = "mensagem sucesso";

  // limpa os campos
  document.getElementById("nomeCompleto").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("email").value = "";
  document.getElementById("senha").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("./data/cidades-brasileiras.json")
    .then(response => response.json())
    .then(data => {
      const datalist = document.getElementById("cidadesList");
      data.forEach(cidade => {
        const option = document.createElement("option");
        option.value = cidade.nome;
        datalist.appendChild(option);
      });
    })
    .catch(error => {
      console.error("Erro ao carregar cidades:", error);
    });
});

function voltar() {
  window.location.href = "index.html";
}

