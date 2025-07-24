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
    msg.textContent = "Login bem-sucedido!";
    msg.className = "mensagem sucesso";
    setTimeout(() => {
      window.location.href = "menu.html"; 
    }, 1000);
  } else {
    msg.textContent = "Usuário ou senha inválidos, tente novamente.";
    msg.className = "mensagem erro";
  }
}