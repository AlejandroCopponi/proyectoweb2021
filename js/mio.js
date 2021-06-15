//cambio de menú al scrollear
 window.onscroll = function() {scrollFunction()};
 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     document.getElementById("navbar").style.background = "rgba(0, 0, 0, 0.750)";
   } else {
     document.getElementById("navbar").style.background = "rgba(0, 0, 0, 0.100)";
   }
 }

  //AOS.init();// inicialización básica
  AOS.init({
    easing: 'ease-out-back',
    duration: 1500
});

// formulario de contacto en nueva pestaña minimizada
window.onload = function() {
    var anchor = document.getElementById("anchor");         
    anchor.onclick = function() {
        var url = "contacto.html";
        window.open(url, "_blank", 'width=750rem,height=700rem'); 
        return false;
    };
}

//función para cerra ventana botón cerrar formulario contacto
var miVentana; 
        function cerrarVentana() { 
            miVentana = window 
            miVentana.close();  
        } 

//funciones para la galería
const $owlCarousel = $(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  navText: [
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>'
  ]
});

$($owlCarousel).on("changed.owl.carousel", e => {
  $(".owl-slide-animated").removeClass("is-transitioned");
  const $currentOwlItem = $(".owl-item").eq(e.item.index);
  $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");
});

/*you have to bind initialized event before owl's initialization (see demo) */
$(".owl-carousel").on("initialized.owl.carousel", () => {
  setTimeout(() => {
    $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
  }, 200);
});