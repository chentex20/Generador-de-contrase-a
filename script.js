function generarContrasena() {
    const length = document.getElementById('length').value;
    const includeSpecials = document.getElementById('includeSpecials').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;

    let caracteres = '';
    if (includeSpecials) caracteres += '!@#$%^&*()_+{}:"<>?|[];\',./`~';
    if (includeNumbers) caracteres += '0123456789';
    if (includeUppercase) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) caracteres += 'abcdefghijklmnopqrstuvwxyz';

    if (!caracteres) {
        alert('Debe seleccionar al menos un tipo de carácter.');
        return;
    }

    let contrasena = '';
    for (let i = 0; i < length; i++) {
        contrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    
    document.getElementById('generatedPassword').textContent = contrasena;

    // Habilita el botón de copiar
    document.getElementById('copy-button').disabled = false;
}


document.getElementById('copy-button').addEventListener('click', function() {
    const word = document.getElementById('generatedPassword').innerText;
    
    // Crea un contenedor temporal para el texto
    const tempElement = document.createElement('textarea');
    tempElement.value = word;
    document.body.appendChild(tempElement);
    
    // Selecciona el contenido del textarea
    tempElement.select();
    document.execCommand('copy');
    
    // Elimina el contenedor temporal
    document.body.removeChild(tempElement);

    // Alerta para confirmar la copia
    alert('Palabra copiada al portapapeles: ' + word);
});








document.getElementById('generate-button').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    document.getElementById('generated-password').innerText = randomWord;
    
    // Habilita el botón de copiar
    document.getElementById('copy-button').disabled = false;
});
