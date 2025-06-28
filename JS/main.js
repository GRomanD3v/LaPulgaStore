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

document.addEventListener("DOMContentLoaded", () => {
    // Inicia el reloj una vez que el DOM está listo
    setInterval(mostrarFecha, 1000);

    // Botones con SweetAlert
    const categorias = ["Tecnología", "Música", "Accesorios", "Juegos"];
    categorias.forEach(id => {
        const boton = document.getElementById(id);
        if (boton) {
            boton.addEventListener("click", () => {
                Swal.fire({
                    title: "¡Pronto!",
                    text: "Atento a las novedades",
                    icon: "info"
                });
            });
        }
    });
});
