// Esperamos a que todo el contenido cargue
window.onload = function() {
    var elementoCarrusel = document.querySelector('#carouselExampleIndicators');
    
    // Intento de inicializarlo al estilo Bootstrap 5
    if (typeof bootstrap !== 'undefined') {
        new bootstrap.Carousel(elementoCarrusel, {
            interval: 2000, // 2 segundos
            ride: true
        });
        console.log("Carrusel iniciado con Bootstrap 5");
    } 
    // Si falla, intenta al estilo Bootstrap 4 (jQuery)
    else if (typeof $ !== 'undefined') {
        $('#carouselExampleIndicators').carousel({
            interval: 2000
        });
        console.log("Carrusel iniciado con Bootstrap 4 + jQuery");
    }
};