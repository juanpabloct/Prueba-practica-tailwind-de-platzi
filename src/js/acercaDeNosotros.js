const cantidad = document.querySelector(".boton");
const carrusel = document.querySelector(".carrusel");
const cBoton = document.querySelector(".c-boton");
const hijosCboton = cBoton.children;
const allCarrusel = carrusel.children;
const clonacion = cantidad.cloneNode(true);
const clonacion1 = cantidad.cloneNode(true);
let contadorHijosCarrusel = allCarrusel.length;
cBoton.appendChild(clonacion);
cBoton.appendChild(clonacion1);

const ocultos = [];
const mostrado = [];
for (let i in hijosCboton) {
  if (allCarrusel[i].classList.contains("hidden")) {
    ocultos.push(i);
  } else {
    mostrado.push(i);
  }
  hijosCboton[i]?.addEventListener("click", (e) => {
    for (let r in ocultos) {
      let [valor1, valor2] = ocultos[r];
      if (valor1 == i || valor2 == i) {
        console.log(valor1);
        ocultos[r] = mostrado[0];
      } else {
        if (valor2 != i || valor2 != 1) {
          ocultos[r] = mostrado[0];
        }
      }
      mostrado[0] = i;
      const recorrer = ocultos[r];
      allCarrusel[recorrer].classList.replace("grid", "hidden");
    }
    const nodeMostrar = mostrado[0];
    allCarrusel[nodeMostrar].classList.replace("hidden", "grid");
  });
}
