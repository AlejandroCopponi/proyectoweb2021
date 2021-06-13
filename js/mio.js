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
        window.open(url, "_blank", 'width=750rem,height=650rem'); 
        return false;
    };
}

//función para cerra ventana botón cerrar formulario contacto
var miVentana; 
        function cerrarVentana() { 
            miVentana = window 
            miVentana.close();  
        } 