var iconos = ["fa-kiss-beam", "fa-laugh-beam", "fa-grin-hearts", "fa-meh-rolling-eyes"];

function mostrarIconoPrincipal(icono) {
  var mainIcon = document.getElementById("main_icon");
  mainIcon.classList = "fas";
  mainIcon.classList.add(icono);
}

function eliminarIcono() {
  iconos.splice(index, 1);
  imprimirTodosLosIconos();
}

function imprimirIcono(icono, index) {
  var lista = document.getElementById("icons_list");
  lista.insertAdjacentHTML('beforeend',
    `<li class="icon_container" onclick="mostrarIconoPrincipal(` + index + `)">
        <i class="close_icon fas fa-times" onclick="eliminarIcono(`+ index + `)"></i>
        <i class="icon fas `+ icono + `"></i>
        <div class="label">`+ icono + `</div>
      </li>
      `);
}


function agregarIcono() {

  var icono = document.getElementById("icon_input").value;
  iconos.push(icono);
  imprimirTodosLosIconos();
  vaciar();
  mostrarIconoPrincipal();
}
function validar() {
  var name = document.getElementById("icon_input").value;
  var nom = validarNombre(name);
  if (nom) {
    agregarIcono();
  }
}

function validarNombre(nombre) {
  var n = nombre.length;
  if (n >= 1) {
    return true;
  } else {
    return false;
  }
}

function imprimirTodosLosIconos() {
  document.getElementById("icons_list").innerHTML = "";
  iconos.forEach(imprimirIcono);
}
imprimirTodosLosIconos();

function vaciar() {
  document.getElementById("icon_input").value = "";
}