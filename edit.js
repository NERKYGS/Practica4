
// Definimos las variables que hacen referencia a elementos del HTML
// Estas variables nos permitirán manipular esos elementos más adelante.

const boton = document.getElementById('interruptor');   // El botón que el usuario va a presionar
const cuerpo = document.body;                           // La etiqueta <body> de la página (el fondo, etc.)
const sol = document.getElementById('icono-sol');       // El icono del sol (modo día)
const luna = document.getElementById('icono-luna');     // El icono de la luna (modo noche)
const mensaje = document.getElementById('mensaje');      // Un párrafo o elemento donde se muestra un mensaje


// Agregamos un "escuchador de eventos" al botón.
// Esto significa que el código dentro de las llaves {} se ejecutará cada vez que se haga clic en el botón.

boton.addEventListener('click', () => {
    
    // toggle() agrega la clase 'modo-noche' al <body> si no la tiene, y la quita si ya la tiene.
    // Así podemos aplicar estilos CSS diferentes cuando el cuerpo tiene esa clase.
    cuerpo.classList.toggle('modo-noche');

    // Verificamos si el cuerpo TIENE la clase 'modo-noche' (es decir, si estamos en modo noche)
    if (cuerpo.classList.contains('modo-noche')) {
        
        // --- Si estamos en modo noche: ---
        
        // Ocultamos el icono del sol (añadiéndole la clase 'oculto', que seguramente pone display:none)
        sol.classList.add('oculto');
        
        // Mostramos el icono de la luna (quitándole la clase 'oculto')
        luna.classList.remove('oculto');
        
        // Cambiamos el texto del botón
        boton.innerText = "Hacer de Dia"; 
        
        // Cambiamos el mensaje que se muestra al usuario
        mensaje.innerText = "Te ha hablado Dross y te deseo Buenas Noches";
        
        // Mostramos un mensaje en la consola del navegador (solo para pruebas)
        console.log("Iniciando transición al anochecer..."); 
        
    } else {
        
        // --- Si NO estamos en modo noche (es decir, es modo día): ---
        
        // Mostramos el icono del sol (quitamos 'oculto')
        sol.classList.remove('oculto');
        
        // Ocultamos el icono de la luna (añadimos 'oculto')
        luna.classList.add('oculto');
        
        // Cambiamos el texto del botón al estado inicial
        boton.innerText = "Hacer de Noche";
        
        // Cambiamos el mensaje al de buenos días
        mensaje.innerText = "¡Buenos dias estrellitas, la tierra les dice hola!";
        
        // Mensaje en consola
        console.log("Iniciando transición al amanecer...");
    }
});