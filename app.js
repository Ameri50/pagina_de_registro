let idCounter = 4;
let currentEditId = null;

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
  if (currentEditId === null) {
    document.getElementById("modal-title").innerText = "Nuevo Registro";
  } else {
    document.getElementById("modal-title").innerText = "Editar Registro";
  }
  document.getElementById("nombre").value = "";
  document.getElementById("email").value = "";
}

function cerrarFormulario() {
  document.getElementById("modal-form").classList.add("hidden");
  document.getElementById("nombre").value = "";
  document.getElementById("email").value = "";
}

function guardarRegistro() {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();

  if (nombre === "" || email === "") {
    alert("Por favor completa todos los campos.");
    return;
  }

  if (currentEditId) {
    // Actualizar el registro
    const fila = document.getElementById(`fila-${currentEditId}`);
    fila.cells[1].innerText = nombre;
    fila.cells[2].innerText = email;
    cerrarFormulario();
  } else {
    // Crear un nuevo registro
    const tbody = document.getElementById("registro-body");

    const fila = document.createElement("tr");
    fila.id = `fila-${idCounter}`;
    fila.innerHTML = `
      <td>${idCounter}</td>
      <td>${nombre}</td>
      <td>${email}</td>
      <td>
        <button class="edit-btn" onclick="editarRegistro(${idCounter})">Editar</button>
        <button class="delete-btn" onclick="eliminarRegistro(${idCounter})">Eliminar</button>
      </td>
    `;
    tbody.appendChild(fila);

    cerrarFormulario();
    document.getElementById("no-data").style.display = "none";
    idCounter++;
  }
}

function editarRegistro(id) {
  currentEditId = id;
  const fila = document.getElementById(`fila-${id}`);
  const nombre = fila.cells[1].innerText;
  const email = fila.cells[2].innerText;

  document.getElementById("nombre").value = nombre;
  document.getElementById("email").value = email;

  document.getElementById("modal-form").classList.remove("hidden");
  document.getElementById("modal-title").innerText = "Editar Registro";
}
