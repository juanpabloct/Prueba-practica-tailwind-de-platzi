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
  datos = copiaInformacionComida[contador];
  slider(datos);
  console.log(datos);
});
const siguiente = document.querySelector(".siguiente");
siguiente.addEventListener("click", () => {
  contador = contador + 1;
  if (contador > informacionComida.length - 1) {
    contador = 0;
  }
  let datos = copiaInformacionComida[contador];
  console.log(datos);
  slider(datos);
});
function slider(params) {
  const carrusel = document.querySelector(".carrusel");
  const { nombre, precio, descripcion, url } = params;
  const retornar = `<div
    class="border-2 border-slate-500 w-11/12 h-80 md:w-2/6 md:h-80 text-center flex flex-col items-center rounded-md"
  >
    <img
      class="w-3/5 h-3/4"
      src="${url}"
      alt="${nombre}"
    />
    <div class="capitalize font-semibold">${nombre}</div>
    <div class="font-medium">Valor: 100$</div>
    <div class="text-sm md:text-lg">
      ${descripcion}
    </div>
    <button
      class="bg-gradient-to-r mt-2 mb-4 to-gray-600 from-orange-100 w-16 rounded-md text-sm"
    >
      Comprar
    </button>
  </div>`;
  carrusel.innerHTML = retornar;
}
const tamañoPantalla = window.innerWidth;
if (tamañoPantalla < "767") {
  slider(informacionComida[0]);
}
if (tamañoPantalla > "767") {
  informacionComida.map((item) => {
    const { nombre, precio, descripcion, url } = item;
    const carrusel = document.querySelector(".carrusel");
    const valores = `<div
    class="border-2 mt-3 border-slate-500 w-11/12 h-80 md:w-2/6 md:h-80 text-center flex flex-col items-center rounded-md shadow-md shadow-slate-500 hover:shadow-lg hover:shadow-sky-500"
  >
    <img
      class="w-3/5 h-3/4"
      src="${url}"
      alt="${nombre}"
    />
    <div class="capitalize font-semibold">${nombre}</div>
    <div class="font-medium">Valor: 100$</div>
    <div class="text-sm md:text-lg">
      ${descripcion}
    </div>
    <button
      class="bg-gradient-to-r mt-2 mb-4 to-gray-600 from-orange-100 w-16 rounded-md text-sm"
    >
      Comprar
    </button>
  </div>`;
    carrusel.innerHTML += valores;
  });
}
