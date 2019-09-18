var iconos = ["fa-kiss-beam", "fa-laugh-beam", "fa-grin-hearts", "fa-meh-rolling-eyes"];

function imprimirIcono(icono,index){
  var lista = document.getElementById("icons_list");
  lista.insertAdjacentHTML('beforeend', `<li class="icon_container" onclick="mostrarIconoPrincipal(`+ icono +`)">
  <i class="close_icon fas fa-times" onclick="eliminarIcono(`+index+`)"></i>
  <i class="fas `+icono+`"></i>
  <div class="label">`+icono+`</div>
</li>`);

}
function imprimirToodsLosIconos(){
  document.getElementById("icons_list").innerHTML = "";
  iconos.forEach(imprimirIcono);
}
function mostrarIconoPrincipal(icono) {
  var mainIcon = document.getElementById("main_icon");
  mainIcon.classList = "fas";
  mainIcon.classList.add(icono);
}

function eliminarIcono(index) {
  event.stopPropagation();
  iconos.splice(index, 1);
  imprimirToodsLosIconos();
}
function agregarIcono(){
  var icono = document.getElementById("icon_input").value;
  
  if(icono!==""){
    iconos.push(icono);
    imprimirToodsLosIconos();
  }
  
  
}
imprimirToodsLosIconos();