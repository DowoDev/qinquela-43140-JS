const nombreCircuitoForm = document.getElementById("nombreCircuitoForm");
const nombreCircuitoInput = document.getElementById("nombreCircuito");
const botonIngresar = document.querySelector(".botonIngresar");
const tablaDatos = document.getElementById("tablaDatos");

// Simulación de animación de carga durante 5 segundos
function mostrarAnimacionCarga() {
  const overlay = document.createElement("div");
  overlay.id = "loading-overlay";
  document.body.appendChild(overlay);

  const loadingContainer = document.createElement("div");
  loadingContainer.className = "loading-container";
  overlay.appendChild(loadingContainer);

  const loadingCircle = document.createElement("div");
  loadingCircle.className = "loading-circle";
  loadingContainer.appendChild(loadingCircle);

  const loadingText = document.createElement("p");
  loadingText.textContent = "CARGANDO EL PROYECTO";
  loadingText.className = "loading-text";
  loadingContainer.appendChild(loadingText);

  const loadingCounter = document.createElement("p");
  loadingCounter.className = "loading-counter";
  loadingCounter.textContent = "Espere... 3 seg";
  loadingContainer.appendChild(loadingCounter);

  let countdown = 3;
  const counterInterval = setInterval(() => {
    countdown--;
    loadingCounter.textContent = "Espere... " + countdown + " seg";
    if (countdown === 0) {
      clearInterval(counterInterval);
      overlay.remove();
      mostrarMensajeBienvenida();
    }
  }, 1000);
}

// Mostrar mensaje de bienvenida utilizando SweetAlert
function mostrarMensajeBienvenida() {
  Swal.fire({
    icon: "success",
    imageUrl: './assets/img/f1a.gif',
    imageWidth: 400,
    imageHeight: 220,
    imageAlt: 'Custom image',
    title: "¡Bienvenido a QualyAPP!",
    text: "Disfruta de la experiencia.",
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
// Esperar a que se cargue la página y luego mostrar la animación de carga
window.addEventListener("load", () => {
  mostrarAnimacionCarga();
});

function cargarOpcionesSelector() {
  const selector = document.getElementById('nombreCircuito');

  const optionPlaceholder = document.createElement('option');
  optionPlaceholder.value = '';
  optionPlaceholder.textContent = 'Ronda - País y Fecha';
  optionPlaceholder.disabled = true;
  optionPlaceholder.selected = true;

  selector.appendChild(optionPlaceholder);

  fetch("https://ergast.com/api/f1/2023.json")
    .then(response => response.json())
    .then(data => {
      const carreras = data.MRData.RaceTable.Races;

      carreras.forEach(carrera => {
        const fecha = carrera.round;
        const pais = carrera.Circuit.Location.country;
        const dia = new Date(carrera.date);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const diaFormateado = dia.toLocaleDateString('es-AR', options);

        const optionText = `Ronda ${fecha} - ${pais} - ${diaFormateado}`;
        const optionValue = `${fecha}-${pais}-${diaFormateado}`;

        const option = document.createElement('option');
        option.value = optionValue;
        option.textContent = optionText;

        selector.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
    });
}

function mostrarImagenPais(indiceFecha) {
  const banderaImg = document.getElementById("banderaImg");

  if (indiceFecha >= 1 && indiceFecha <= 22) {
    const rutaImagen = "./assets/flags/" + indiceFecha + ".png";
    banderaImg.src = rutaImagen;
    banderaImg.setAttribute("width", "500");
    banderaImg.style.display = "block";
    banderaImg.style.position = "absolute";
    banderaImg.style.top = "135px";
    banderaImg.style.left = "72%";
  } else {
    banderaImg.style.display = "none";
  }
}

let backupCircuito = "";
nombreCircuitoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const tablaContenedor = document.getElementById("tablaContenedor");

  const botonActualizar = document.getElementById("botonActualizar");
  botonActualizar.style.display = document.getElementById("nombreCircuito").value !== "" ? "block" : "none";

  let seleccionado = nombreCircuitoInput.value;
  if (seleccionado) {
    const circuitoInfo = seleccionado.split('-');
    const country = circuitoInfo[1].trim();
    if (backupCircuito == "") {
      backupCircuito = seleccionado;
    }
    Swal.fire({
      icon: 'question',
      title: 'Elegiste el circuito de\n ' + country,
      text: `¿Confirmas la selección?`,
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      confirmButtonColor: '#38BA7C',
      cancelButtonColor: '#F34542',
    }).then((result) => {
      if (result.isConfirmed) {
        tablaDatos.innerHTML = "";//Vacía la tabla cunado elegimos un país nuevo
        backupCircuito = seleccionado;
        const mensajeBienvenida = document.getElementById("mensajeBienvenida");
        mensajeBienvenida.textContent = `Final JS - Comisión 43140 | J. Sebastián Rubio`;
        selectedRound = parseInt(circuitoInfo[0]);
        if (selectedRound < 13) {
          Swal.fire({
            icon: 'success',
            title: country,
            color: '#38BA7C',
            imageUrl: './assets/posters/' + selectedRound + '.jpg',
            imageWidth: 256,
            imageHeight: 384,
            imageAlt: 'Custom image',
            text: 'SELECCIONADO CON ÉXITO!',
          });
          mostrarImagenPais(parseInt(seleccionado.split(" ")[0]));
          mostrarSelectorTipo();
        } else {
          Toastify({
            text: "NO SE ENCUENTRAN DATOS PARA EL GRAN PREMIO",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center",
            style: {
              background: "#F34542",
            },
            stopOnFocus: true
          }).showToast();
          Swal.fire({
            icon: 'error',
            imageUrl: './assets/img/f1error.gif',
            imageWidth: 400,
            imageHeight: 220,
            imageAlt: 'Custom image',
            title: 'Lo Siento',
            text: 'EL GRAN PREMIO SELECCIONADO TODAVIA NO SE HA REALIZADO',
            confirmButtonText: 'VOLVER'
          })
          return; // Salir de la función si el Gran Premio no existe
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        nombreCircuitoInput.value = backupCircuito;
      }
    });
  }

});

function selectorCambio() {
  const nombreCircuito = document.getElementById('nombreCircuito');
  const seleccionado = nombreCircuito.options[nombreCircuito.selectedIndex].value;

  if (!seleccionado || seleccionado === "Ronda - País y Fecha") {
    mostrarImagenPais(0); // Ocultar la imagen
    return;
  }

  const countryName = seleccionado.split("-")[1].trim();

  Toastify({
    text: `País seleccionado: ${countryName}`,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    style: {
      background: "chartreuse",
    },
    stopOnFocus: true
  }).showToast();

}

nombreCircuitoInput.addEventListener("change", selectorCambio);

document.getElementById("btnConfirmarTipo").addEventListener("click", function () {
  const selectedTipo = document.getElementById("tipoSelector").value;

  if (selectedTipo === "clasificacion") {
    cargarDatos(`https://ergast.com/api/f1/2023/${selectedRound}/qualifying.json`, true);

  } else if (selectedTipo === "carrera") {
    cargarDatos(`https://ergast.com/api/f1/2023/${selectedRound}/results.json`, false);
  }
});

document.getElementById("botonActualizar").addEventListener("click", actualizarPagina);

function actualizarPagina() {
  Swal.fire({
    icon: 'info',
    title: 'REINICIANDO APLICACION',
    text: 'Presione el botón "OK" para Reiniciar la Aplicación',
    imageUrl: './assets/img/f1reset.gif',
    imageWidth: 400,
    imageHeight: 220,
    imageAlt: 'Custom image',
  }).then(() => {
    Toastify({
      text: "LA APLICACION SE REINICIARA AUTOMATICAMENTE DESPUES DE 3 SEGUNDOS",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      style: {
        background: "linear-gradient(to right, #c92e46, #d19627)",
        color: "white",
      },
      stopOnFocus: true
    }).showToast();

    setTimeout(() => {
      location.reload();
    }, 3000);
  });
}

function mostrarSelectorTipo() {
  const tipoSelector = document.getElementById("tipoSelector");
  const btnConfirmarTipo = document.getElementById("btnConfirmarTipo");

  tipoSelector.innerHTML = "";

  const opcionBlanco = document.createElement("option");
  opcionBlanco.value = "";
  opcionBlanco.textContent = "Elija los datos a mostrar";
  tipoSelector.appendChild(opcionBlanco);

  const opcionClasificacion = document.createElement("option");
  opcionClasificacion.value = "clasificacion";
  opcionClasificacion.textContent = "Clasificación";
  tipoSelector.appendChild(opcionClasificacion);

  const opcionCarrera = document.createElement("option");
  opcionCarrera.value = "carrera";
  opcionCarrera.textContent = "Carrera";
  tipoSelector.appendChild(opcionCarrera);

  tipoSelector.style.display = "block";
  btnConfirmarTipo.style.display = "block";
}

function cargarDatos(url, isClasificacion) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const datos = isClasificacion ? data.MRData.RaceTable.Races[0].QualifyingResults : data.MRData.RaceTable.Races[0].Results;

      tablaDatos.innerHTML = "";

      const encabezados = isClasificacion
        ? ["POSICION", "PILOTO", "EQUIPO", "Q1", "Q2", "Q3"]
        : ["POSICION", "PILOTO", "EQUIPO", "TIEMPO TOTAL", "STATUS"];

      const encabezadosRow = document.createElement("tr");
      encabezados.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        encabezadosRow.appendChild(th);
      });
      tablaDatos.appendChild(encabezadosRow);

      datos.forEach(item => {
        let imgPiloto = `./assets/img/${item.Driver.permanentNumber}.png`;
        let imgMiniatura = `<div id=info"></div><img src="${imgPiloto}" alt="Imagen del piloto" class="imagenPiloto" id="imgModal">`;

        let fila = document.createElement("tr");
        let tiempo = isClasificacion ? [item.Q1 || '', item.Q2 || '', item.Q3 || ''] : [item.Time ? item.Time.time : '', item.status || ''];
        fila.innerHTML = `
          <td>${item.position}</td>
          <td><div class="piloto-cell">${imgMiniatura}<span>${item.Driver.givenName} ${item.Driver.familyName}</div></span></td>
          <td>${item.Constructor ? item.Constructor.name.toUpperCase() : ''}</td>
          ${tiempo.map(t => `<td>${t}</td>`).join('')}
        `;
        tablaDatos.appendChild(fila);
        if (isClasificacion) {
          if (item.position == 10) {
            fila.classList.add("top10");
          }
          if (item.position == 15) {
            fila.classList.add("top15");
          }
        }
      });

      const tablaContenedor = document.getElementById("tablaContenedor");
      tablaContenedor.style.display = "block";
      tablaContenedor.style.marginTop = "20px";

      Toastify({
        text: "LOS DATOS SOLICITADOS HAN SIDO CARGADOS EXITOSAMENTE",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
          top: '50% !important',
        },
        stopOnFocus: true,
      }).showToast();
      localStorage.setItem("datosCarrera", JSON.stringify(datos));
    })

    .catch(error => {
      Toastify({
        text: "NO SE ENCUENTRAN DATOS PARA EL GRAN PREMIO",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        style: {
          background: "#f44336",
        },
        stopOnFocus: true
      }).showToast();
      Swal.fire({
        icon: 'error',
        imageUrl: './assets/img/f1error.gif',
        imageWidth: 400,
        imageHeight: 220,
        imageAlt: 'Custom image',
        title: 'Lo Siento',
        text: 'EL GRAN PREMIO SELECCIONADO TODAVIA NO SE HA REALIZADO',
        confirmButtonText: 'INICIAR REINICIO APLICACION'
      }).then(() => {
        // Reiniciar la página
        actualizarPagina();
      });

      return; // Salir de la función si el Gran Premio no existe
    });


}

cargarOpcionesSelector();

selectorCambio();


/*----------------------------------------------------------------------------------*/


const pilotosJson = 'https://raw.githubusercontent.com/DowoDev/qinquela-43140-JS/main/js/pilotos.json';

// Función para obtener los datos y procesarlos
async function fetchDataPilotos() {
  try {
    const respuesta = await fetch(pilotosJson);
    const datos = await respuesta.json();

    const tarjetas = datos.MRData.DriverTable.Drivers;

    let datosExtraidos = tarjetas.map(piloto => ({
      permanentNumber: piloto.permanentNumber,
      givenName: piloto.givenName,
      familyName: piloto.familyName,
      country: piloto.country,
      countryPic: piloto.countryPic,
      grands_prix_entered: piloto.grands_prix_entered,
      world_championships: piloto.world_championships,
      podiums: piloto.podiums,
      career_points: piloto.career_points,
      Constructors_Carreer: piloto.season,
      Constructor_name: piloto.name,
      logo: piloto.logo,
      pic: piloto.pic,
      picNumber: piloto.picNumber,
      season: piloto.season,
      races_won: piloto.races_won,
    }));

    return datosExtraidos;
  } catch (error) {
    console.error('Error al extraer los datos:', error);
    return [];
  }
}

// Llamar a la función y obtener los datos
fetchDataPilotos().then(data => {
  console.log(data)
});

