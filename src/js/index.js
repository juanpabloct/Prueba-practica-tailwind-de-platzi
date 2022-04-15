const informacionComida = [
  {
    nombre: "pizza con jamon y queso",
    precio: 100,
    descripcion:
      "pizza llena de queso con jamon de 5 porciones tamaño familiar",
    url: "https://www.saborusa.com/wp-content/uploads/2019/12/origen-de-la-pizza-1.jpg",
  },
  {
    nombre: "pizza Hawaina",
    precio: 100,
    descripcion: "pizza Hawaina de 5 porciones tamaño familiar",
    url: "https://simplementerecetas.com/wp-content/uploads/2020/08/Pizza-hawaiana-con-jam%C3%B3n.jpg",
  },
  {
    nombre: "pizza Mexicana",
    precio: 100,
    descripcion: "pizza mexicana de 5 porciones tamaño familiar",
    url: "https://cdn.colombia.com/gastronomia/2011/08/25/pizza-margarita-3684.jpg",
  },
  {
    nombre: "pizza con jamon y queso",
    precio: 100,
    descripcion:
      "pizza llena de queso con jamon de 5 porciones tamaño familiar",
    url: "https://co.littlecaesars.com/static/1582054717-grande-pepperoni.png",
  },
  {
    nombre: "hamburguesa",
    precio: 200,
    descripcion: "hamburguesa de carne",
    url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=80",
  },
];

let contador = 0;
const copiaInformacionComida = informacionComida.slice();
const antes = document.querySelector(".antes");
antes.addEventListener("click", () => {
  contador = contador - 1;
  if (contador < 0) {
    contador = informacionComida.length - 1;
  }
  const datos = copiaInformacionComida[contador];
  slider(datos);
});
const siguiente = document.querySelector(".siguiente");
siguiente.addEventListener("click", () => {
  contador = contador + 1;
  if (contador > informacionComida.length - 1) {
    contador = 0;
  }
  let datos = copiaInformacionComida[contador];
  slider(datos);
  const button = document.querySelector(".button");
});
const carrusel = document.querySelector(".carrusel");
let seleccionado;
function slider(params) {
  const { nombre, precio, descripcion, url } = params;
  //constructor
  const retornar = `<div
    class=" col-span-1 border-2 border-slate-500 w-11/12 h-96 sm:h-96 md:w-3/4 md:h-full  text-center flex flex-col md:flex-col lg:flex-col items-center rounded-md shadow-md shadow-slate-600 hover:shadow-lg hover:shadow-cyan-500 relative"
  >
    <img
      class="w-4/5 h-48 sm:h-52 lg:w-3/4  lg:h-56 rounded-md"
      src="${url}"
      alt="${nombre}"
    />
    <div class="capitalize font-semibold">${nombre}</div>
    <div class="font-medium"><b>Valor:</b><span>100</span>$</div>
    <div class="text-sm md:text-lg">
      ${descripcion}
      </div>
      <div>&starf; &starf; &starf; &starf; &starf;</div>
    <a class=" mt-2 mb-5
     bg-gray-600 w-16 md:w-3/4 rounded-md button relative button"><button
    
      class="text-sm"
    >
    Comprar
    </button></a>
    </div>`;
  return window.innerWidth < "767"
    ? (carrusel.innerHTML = retornar)
    : (carrusel.innerHTML += retornar);
}
if (window.innerWidth < "767") {
  //si la pantalla es menor a 767px sera un slider y su pocision inicia en 0
  slider(informacionComida[0]);
} else {
  //Si la pantalla es mayor a 767px mostrara todos los datos a la vez
  if (window.innerWidth > "767") {
    informacionComida.forEach((element) => {
      const { nombre, url, descripcion, precio } = element;
      slider(element);
      const button = document.querySelector(".button");
    });
  }
}

//seccion que se trabaja con los comentarios
const informacionComentario = document.querySelector("#comentario");
const comentarios = document.querySelector(".escrito");
function añadirComentario() {
  const informacion = informacionComentario.value;
  comentarios.innerHTML += `<div class="ml-6 mb-2 text-lg bg-slate-50 ">${informacion}</div>`;
  informacionComentario.value = "";
}
const tecla = document;
tecla.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    añadirComentario();
  }
});
const boton = document.querySelector(".button");
const buscar = document.querySelector(".search");

//Busqueda de productos por nombre
buscar.addEventListener("click", () => {
  const busqueda = document.querySelector(".inputSearch").value;
  const carruselCompleto = carrusel.children;
  for (let i of carruselCompleto) {
    try {
      i.children[1]?.classList.add("resultado");
    } catch (error) {}
  }
  const resultado = document.querySelectorAll(".resultado");
  for (const element of resultado) {
    const similitudPeticion = element?.innerHTML?.toLowerCase();
    try {
      const parent = element.parentNode;
      if (similitudPeticion.includes(busqueda)) {
        parent.classList.remove("hidden");
        parent.classList.replace("col-span-1", "col-span-2");
      } else {
        parent.classList.add("hidden");
      }
    } catch (error) {}
  }
});

// Modal
const buttonComprar = document.querySelectorAll(".button");
for (let i of buttonComprar) {
  i.addEventListener("click", () => {
    const contenidoModal = document.querySelector(".contenido");
    const padreBoton = i.parentNode.children;
    const imagen = padreBoton[0].getAttribute("src");
    const nombre = padreBoton[1].innerHTML;
    const precio = padreBoton[2].innerHTML;
    const descripcion = padreBoton[3].innerHTML;
    let unidades = 1;
    contenidoModal.innerHTML = `
      <div class="flex flex-col items-center justify-center">
        <img class="h-24 w-24 rounded-full"src="${imagen}"/>
        <h2 class="text-base md:text-2xl font-medium capitalize text-center">${nombre}</h2>
      </div>
      <div class="flex flex-col justify-items-start text-center text-sm md:text-lg">
        <p><b>Descripción:</b>${descripcion}</p>
        <p class="precio">${precio}</p>
        <p><b>unidades</b>:<span class="unidad">${unidades}</span><p/>
      </div>
      <div class="flex flex-row setUnidades w-full justify-center mb-2 divide-x-2">
        <button class="w-1/4 bg-slate-400 hover:bg-slate-500 rounded-sm">-</button>
        <button  class="w-1/4 bg-slate-400 hover:bg-slate-500 rounded-sm" >+</button>
      </div>
      <button class="w-1/2 bg-slate-300 hover:bg-slate-500 rounded-sm comprar">Comprar</button>
    `;
    const comprar = document.querySelector(".comprar");
    comprar.addEventListener("click", (e) => {
      setTimeout(() => {
        document.querySelector(".c-modal").classList.replace("flex", "hidden");
        alert("Compra realizada con exito");
      }, 1000);
    });
    //Contenedor de botones de cambio de unidades
    const cBotonesCambiadores = document.querySelector(".setUnidades").children;
    const unidad = document.querySelector(".unidad");
    let valorProducto = document.querySelector(".precio").children[1];
    let precioBase = valorProducto.textContent;
    cBotonesCambiadores[0].addEventListener("click", () => {
      unidades--;
      if (unidades === 0) {
        unidades = 1;
      }
      const valorTotal = unidades * Number(precioBase);
      valorProducto.innerHTML = valorTotal;
      unidad.innerHTML = unidades;
    });
    cBotonesCambiadores[1].addEventListener("click", () => {
      unidades++;
      const valorTotal = unidades * Number(precioBase);
      valorProducto.innerHTML = valorTotal;
      unidad.innerHTML = unidades;
    });
    //Dom del modal
    const contenedorModal = document.querySelector(".c-modal");
    contenedorModal.classList.replace("hidden", "flex");
    const cerrarModal = document.querySelector(".cerrar");
    cerrarModal.addEventListener("click", () => {
      contenedorModal.classList.replace("flex", "hidden");
    });
  });
}
