// formulario de contacto en nueva pestaña minimizada
window.onload = function() {
    var anchor = document.getElementById("anchor");         
    anchor.onclick = function() {
        
        var url = "contacto.html";
        window.open(url, "_blank", 'width=750rem,height=500rem'); 
        return false;
    };
}