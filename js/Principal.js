document.addEventListener('DOMContentLoaded', function() {
    // 1. Inicialización del Carrusel (ID correcto)
    var elementoCarrusel = document.querySelector('#carouselServicios');
    if (elementoCarrusel && typeof bootstrap !== 'undefined') {
        new bootstrap.Carousel(elementoCarrusel, {
            interval: 3000,
            ride: true
        });
    }

    // Lógica para menú desplegable
    var menuContenedor = document.querySelector('.menu-btn-whatsapp');
    var mainBtn = document.querySelector('.main-whatsapp-btn');
    var desplegados = document.querySelectorAll('.btn-desplegado');

    // Alerta de seguridad para móviles (para que el primer toque abra el menú y no el link)
    if (window.matchMedia("(max-width: 768px)").matches) {
        desplegados.forEach(btn => {
            btn.addEventListener('click', function(e) {
                if (!btn.classList.contains('active-wa')) {
                    e.preventDefault();
                    btn.classList.add('active-wa');
                }
            });
        });
    }
});