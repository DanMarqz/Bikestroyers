function darky(){
    var darkmode = document.getElementById('dark');
    
    if (darkmode.checked == true) {
        document.getElementById("css").href = 'css/estilo.css';
    } else {
        document.getElementById("css").href = 'css/estilo-dark.css';
    }
}

window.onload = function () {
    darky();
    document.addEventListener('click', function(e){
        if (event.target.nodeName == 'INPUT' && event.target.type == 'checkbox') {
            darky();
        }
    });
}
