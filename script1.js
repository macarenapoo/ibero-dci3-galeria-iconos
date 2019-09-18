var iconos = ["fa-kiss-beam", "fa-laugh-beam", "fa-grin-hearts", "fa-meh-rolling-eyes"];

function mostrarIconoPrincipal(icono) {
  var mainIcon = document.getElementById("main_icon");
  mainIcon.classList = "fas";
  mainIcon.classList.add(icono);
}

function mostrarOtroIcono(iconos, index){
    var iconsList = document.getElementById("icons_list")
    iconsList.insertAdjacentHTML('beforeend', 
        
    );
}

function eliminarIcono() {
  event.stopPropagation();
  iconos.splice(index, 1);
  imprimirTodosLosIconos();
}

function imprimirTodosLosIconos(){
    document.getElementById<("icons_list").innerHTML= "";
    iconos.forEach(mostrarOtroIcono);
}

function agregarIcono(){
    var iconos = document.getElementsByClassName("icon_input").value;
    iconos.push({iconos});
    imprimirTodosLosIconos(); 
}