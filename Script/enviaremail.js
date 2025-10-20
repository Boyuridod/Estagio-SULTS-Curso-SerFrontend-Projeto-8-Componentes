document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("tentando contato em code.js......")
    const nameSender = this.nome.value;
    const email = this.email.value;
    const subject = "Teste da biblioteca";
    const message = this.mensagem.value;
    console.log(this.nome.value)

    const serviceId = "service_acwkpcv";
    const templateId = "template_me4kg6e";
    const publicKey = "0qnU-smXKj6qbkcmb";

    const templateParams = {
        from_name: nameSender,
        from_email: email,
        to_name: "My components",
        subject: subject,
        message: message,
    };

    emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
            console.log("Email enviado com sucesso!", response);
            alert("SUCESSO!")
        })
        .catch((error) => {
            console.error("Erro ao enviar o email:", error);
            alert("ERRO")
        });
});