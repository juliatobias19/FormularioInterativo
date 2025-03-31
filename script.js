document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");
  const resposta = document.getElementById("resposta");

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); 

    // Limpar mensagens de erro anteriores
    document.querySelectorAll(".erro").forEach(el => el.textContent = "");

    // Capturar valores
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = document.getElementById("idade").value;
    const programacao = document.querySelector('input[name="programacao"]:checked');

    let temErro = false;

    // Validação dos campos
    if (nome === "") {
      document.getElementById("erroNome").textContent = "Nome é obrigatório!";
      temErro = true;
    }

    if (email === "" || !email.includes("@")) {
      document.getElementById("erroEmail").textContent = "Informe um e-mail válido!";
      temErro = true;
    }

    if (idade === "" || idade <= 0) {
      document.getElementById("erroIdade").textContent = "Idade deve ser um número positivo!";
      temErro = true;
    }

    if (!programacao) {
      document.getElementById("erroProgramacao").textContent = "Escolha uma opção!";
      temErro = true;
    }

    // Se houver erro, não prosseguir
    if (temErro) return;

    // Processar respostas
    let mensagem = `Obrigado por participar, <strong>${nome}</strong>!<br>`;
    mensagem += `Idade: ${idade} anos<br>`;
    mensagem += `Email: ${email}<br>`;

    if (programacao.value === "sim") {
      mensagem += "Que legal! Você gosta de programação! 🚀👩🏽‍💻";
    } else {
      mensagem += "Tudo bem! Quem sabe um dia você se interesse? 😉🫰🏼";
    }


    resposta.innerHTML = mensagem;
  });
});
