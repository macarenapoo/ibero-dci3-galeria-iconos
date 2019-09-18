var iconos = ["fa-kiss-beam", "fa-laugh-beam", "fa-grin-hearts", "fa-meh-rolling-eyes"];

function mostrarIconoPrincipal(icono) {
  var mainIcon = document.getElementById("main_icon");
  mainIcon.classList = "fas";
  mainIcon.classList.add(icono);
}
function validar() {
  var nombre = document.getElementById("icon_input").value;
  var validar = validar(texto);

  function validar(texto) {
      var n = nombre.length;
      if (n >= 1) {
          return true;
      } else {
          return false;
      }
  }
}

function imprimirTodosLosIconos() {
  document.getElementById("icons_list").innerHTML = "";
  iconos.forEach(imprimirIcono);
}

function imprimirIcono(icono, index) {
  var list = document.getElementById("icons_list");
  list.insertAdjacentHTML('beforeend', `<li class="icon_container" onclick="mostrarIconoPrincipal('`+ icono +`')">
<i class="close_icon fas fa-times" onclick="eliminarIcono(`+ index + `)"></i>
<i class="icon fas `+ icono +`"></i>
<div class="label">`+ icono +`</div>
</li>`);
}

function agregarIcono() {
  var icono = document.getElementById("icon_input").value;
  iconos.push(icono);
  imprimirTodosLosIconos();
}


function eliminarIcono() {
  event.stopPropagation();
  iconos.splice(index, 1);
  imprimirToodsLosIconos();
}

imprimirTodosLosIconos();