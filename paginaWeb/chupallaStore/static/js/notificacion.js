//Notificacion
document.addEventListener('DOMContentLoaded', function(){
    if(Notification.permission != "granted")
        Notification.requestPermission();
})

//funcion para llamar a una notificacion
function notificar (titulo,mensaje,url){
    var notificacion = new Notification(
        titulo,{
            icon : 'static/images/logo.png',
            body : mensaje,
            requireInteraction : false
        });
    notificacion.onclick = function(){
        window.open(urls);
    }
}
//llamada a la notificacion
setTimeout(function(){
    var titulo = "Mi notificacion";
    var mensaje = "¡Bienvenido a Chupalla Store!";
    var url = "http://www.google.cl"
    notificar(titulo,mensaje,url)
}, 500)
