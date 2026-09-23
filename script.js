const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value;

    const telefone = "5567991653347";

    const texto = `Olá, grandiosos fundadores da empresa FiveTech, tudo bem ? Gostaria de saber se poderiam me ensinar a sentar em um pinto gigantesco! obs: leu é gay.

Nome: ${nome}
E-mail: ${email}
Assunto: ${assunto}

Mensagem:
${mensagem}`;

    const textoFormatado = encodeURIComponent(texto);

    const link = `https://wa.me/${telefone}?text=${textoFormatado}`;

    window.open(link, "_blank");
});
