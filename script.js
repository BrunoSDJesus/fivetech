const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value;

    const telefone = "5567991653347";

    const texto = `Gostaria de saber mais informações!!

Nome: ${nome}
E-mail: ${email}
Assunto: ${assunto}

Mensagem:
${mensagem}`;

    const textoFormatado = encodeURIComponent(texto);

    const link = `https://wa.me/${telefone}?text=${textoFormatado}`;

    window.open(link, "_blank");
});