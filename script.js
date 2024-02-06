document.getElementById('cambiarEstiloBtn').addEventListener('click', function() {
    document.body.classList.toggle('modoNocturno');
});

var idiomaActual = 'es';

document.getElementById('cambiarIdiomaBtn').addEventListener('click', function() {
    idiomaActual = (idiomaActual === 'es') ? 'en' : 'es';
    actualizarContenidoSegunIdioma(idiomaActual);
});

function actualizarContenidoSegunIdioma(idioma) {
    var traducciones = {
        'es': {
            'bienvenido': 'Bienvenido a mi Portafolio',
            'proyectosDestacados': 'Proyectos Destacados',
            'habilidadesTecnicas': 'Habilidades Técnicas',
            'experienciaLaboral': 'Experiencia Laboral',
            'contacto': 'Contacto'
        },
        'en': {
            'bienvenido': 'Welcome to my Portfolio',
            'proyectosDestacados': 'Featured Projects',
            'habilidadesTecnicas': 'Technical Skills',
            'experienciaLaboral': 'Work Experience',
            'contacto': 'Contact'
        }
    };

    document.getElementById('inicio').getElementsByTagName('h2')[0].innerText = traducciones[idioma]['bienvenido'];
    document.getElementById('proyectos').getElementsByTagName('h2')[0].innerText = traducciones[idioma]['proyectosDestacados'];
    document.getElementById('habilidades').getElementsByTagName('h2')[0].innerText = traducciones[idioma]['habilidadesTecnicas'];
    document.getElementById('experiencia').getElementsByTagName('h2')[0].innerText = traducciones[idioma]['experienciaLaboral'];
    document.getElementById('contacto').getElementsByTagName('h2')[0].innerText = traducciones[idioma]['contacto'];
}
