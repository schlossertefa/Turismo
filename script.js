var imgAtual = "imagem2.jpg";
var imgAnterior = "imagem6.jpg";

function trocar(){ 
    // Troca a imagem atual
    document.getElementById("figura").src = imgAtual;
    
    // Troca o valor de imgAtual e imgAnterior
    let aux = imgAtual;
    imgAtual = imgAnterior;
    imgAnterior = aux;
}


// Script para enviar o formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    // Aqui você pode adicionar a lógica para enviar os dados para um servidor
});