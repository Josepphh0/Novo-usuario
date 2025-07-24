
function cadastrar() {
  const nome = document.getElementById("nomeCompleto").value.trim();
  const cidade = document.getElementById("cidade").value.trim(); 
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const msg = document.getElementById("mensagem");

  if (!nome || !cidade || !email || !senha) {
    msg.textContent = "Por favor, preencha todos os campos.";
    msg.className = "mensagem erro";
    return;
  }


  localStorage.setItem("usuarioEmail", email);
  localStorage.setItem("usuarioSenha", senha);

  msg.textContent = "Conta criada com sucesso! Redirecionando para o login...";
  msg.className = "mensagem sucesso";

  document.getElementById("nomeCompleto").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("email").value = "";
  document.getElementById("senha").value = "";


  setTimeout(() => {
    window.location.href = "index.html"; 
  }, 1500); 
}

function voltar() {
  window.location.href = "index.html";
}

function login() {
  const email = document.getElementById("loginEmail").value.trim();
  const senha = document.getElementById("loginSenha").value.trim();
  const msg = document.getElementById("msgLogin");

  if (!email || !senha) {
    msg.textContent = "Por favor, preencha todos os campos.";
    msg.className = "mensagem erro";
    return;
  }

  const emailSalvo = localStorage.getItem("usuarioEmail");
  const senhaSalva = localStorage.getItem("usuarioSenha");

  if (email === emailSalvo && senha === senhaSalva) {
    msg.textContent = "Login bem-sucedido! Redirecionando...";
    msg.className = "mensagem sucesso";
   
    setTimeout(() => {
        window.location.href = "menu.html"; 
    }, 1000); 
  } else {
    msg.textContent = "E-mail ou senha incorretos.";
    msg.className = "mensagem erro";
  }
}


function logout() {

    window.location.href = "index.html";
}



document.addEventListener('DOMContentLoaded', () => {
   
    const cidadeInput = document.getElementById('cidade'); 
    const cidadesDatalist = document.getElementById('lista-cidades'); 

    if (cidadesDatalist && cidadeInput) {
        fetch('data/cidades-brasileiras.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                cidadesDatalist.innerHTML = ''; 
                data.sort((a, b) => a.nome.localeCompare(b.nome)); 
                data.forEach(cidade => {
                    const option = document.createElement('option');
                    option.value = cidade.nome;
                    cidadesDatalist.appendChild(option);
                });

               
                function showDatalistOptions() {
                    const currentValue = cidadeInput.value;
                    cidadeInput.value = ''; 
                    cidadeInput.dispatchEvent(new Event('input', { bubbles: true }));
                    setTimeout(() => {
                        cidadeInput.value = currentValue;
                    }, 0); 
                }

                cidadeInput.addEventListener('focus', showDatalistOptions);
                cidadeInput.addEventListener('click', showDatalistOptions);

            })
            .catch(error => {
                console.error('Erro ao carregar as cidades:', error);
            });
    }
});