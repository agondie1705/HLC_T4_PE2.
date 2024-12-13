function getRandomBotMessage () {
    const messages = [
        "Creo que no.",
        "¡Totalmente!",
        "Eso suena interesante.",
        "No estoy seguro de entender, ¿puedes explicar más?",
        "¡Qué genial!",
        "Hmm, déjame pensar...",
        "¡Por supuesto!",
        "No sé, pero suena divertido.",
        "¿Puedes decirme más?",
        "Eso es un misterio para mí.",
        "¡Me encanta hablar contigo!"]

    return messages[Math.floor(Math.random() * messages.length)];
}
function em()
{
    document.getElementById('mc').addEventListener('click', function mostrarNota(){
        const container=document.createElement('div');
        const note = document.getElementById('textarea').value;
        container.textContent=note;
        document.getElementById('container').appendChild(container)
        document.getElementById('oc').classList.remove('ocultar');
    });
}
function contenedorMensajes(){
    contenedorMensajes.scrollTop = contenedorMensajes.scrollHeight;
}
