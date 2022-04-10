const button = document.querySelector(".presionar");
const textTarea = document.querySelector(".escribe");
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    textTarea.value = "";
  }
});
button.addEventListener("click", () => {
  textTarea.value = "";
});
