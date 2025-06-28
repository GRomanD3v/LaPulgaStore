
function mostrarFecha() {

    let fecha = new Date();
    let dias = ["Domningo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];  

    const diaSemana = dias[fecha.getDay()];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const anio = fecha.getFullYear();
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();

    let mensaje = `Hoy es ${diaSemana} ${dia} de ${mes} de ${anio}, y son las ${horas} horas, ${minutos} minutos con ${segundos} segundos.`;
    document.querySelector("#timer").innerText = mensaje;

}

document.addEventListener("DOMContentLoaded", () => { mostrarFecha();});

document.getElementById("Tecnología").addEventListener("click", function () {
  Swal.fire({
    title: "¡Pronto!",
    text: "Atento a las novedades",
    icon: "info"
  });
});

document.getElementById("Música").addEventListener("click", function () {
  Swal.fire({
    title: "¡Pronto!",
    text: "Atento a las novedades",
    icon: "info"
  });
});

document.getElementById("Accesorios").addEventListener("click", function () {
  Swal.fire({
    title: "¡Pronto!",
    text: "Atento a las novedades",
    icon: "info"
  });
});

document.getElementById("Juegos").addEventListener("click", function () {
  Swal.fire({
    title: "¡Pronto!",
    text: "Atento a las novedades",
    icon: "info"
  });
});