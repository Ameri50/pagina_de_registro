let idCounter = 4;

function eliminarRegistro(id) {
  const fila = document.getElementById(`fila-${id}`);
  if (fila) {
    fila.remove();
  }

  const cuerpoTabla = document.getElementById("registro-body");
  if (cuerpoTabla.children.length === 0) {
    document.getElementById("no-data").style.display = "block";
  }
}

function mostrarFormulario() {
  document.getElementById("modal-form").classList.remove("hidden");
}

function cerrarFormulario() {
  document.getElementById("modal-form").classList.add("hidden");
  document.getElementById("nombre").value = "";
  document.getElementById("email").value = "";
}

function añadirRegistro() {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();

  if (nombre === "" || email === "") {
    alert("Por favor completa todos los campos.");
    return;
  }

  const tbody = document.getElementById("registro-body");

  const fila = document.createElement("tr");
  fila.id = `fila-${idCounter}`;
  fila.innerHTML = `
    <td>${idCounter}</td>
    <td>${nombre}</td>
    <td>${email}</td>
    <td><button class="delete-btn" onclick="eliminarRegistro(${idCounter})">Eliminar</button></td>
  `;
  tbody.appendChild(fila);

  cerrarFormulario();
  document.getElementById("no-data").style.display = "none";
  idCounter++;
}
