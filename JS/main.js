function mostrarFecha() {

    let fecha = new Date();
    let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]; 

    const diaSemana = dias[fecha.getDay()];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const anio = fecha.getFullYear();
    
    
    const horas = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
   

    let mensaje = `Hoy es ${diaSemana} ${dia} de ${mes} de ${anio}, y son las ${horas}:${minutos}.`;
    document.querySelector("#timer").innerText = mensaje;

}


setInterval(mostrarFecha, 1000); 

document.addEventListener("DOMContentLoaded", () => {
    
    Swal.fire("Formulario en mantención!");
});