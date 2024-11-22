const typed = new Typed('.typed', {
    strings: [
    '<i class="mascota">Gato</i>',
    '<i class="mascota">Perro</i>',
    '<i class="mascota">Conejo</i>',
    '<i class="mascota">Pez</i>'
    ],
    //stringsElement: #cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 75, // Velocidad en altsegundos para poner una letro,
    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 75, // Velocidad en miltsegundos para borrrar una letra,
    //smartBackspace: true, // Elteinar solamente las palabras que sean nuevos en una cadena de texto.
    shuffle: true, // Alterar el orden en el que escribe las palabras.
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // cantidad de veces a repetir el array. false Infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '|', // caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
});