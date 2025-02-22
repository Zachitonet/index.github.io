// script.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Formulario enviado con éxito');
        // Aquí puedes agregar el código para enviar el formulario a un servidor si lo deseas.
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
