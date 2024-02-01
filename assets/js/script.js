// toggle tooltips botón enviar "Presiona para enviar a tu correo"
const enviar = document.querySelectorAll('[data-bs-toggle="enviar"]');
const tooltipListEnviar = [...enviar].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// toggle tooltips botón Añadir a favoritos "Agrega esta receta a tus favoritos"
const addfavorite = document.querySelectorAll('[data-bs-toggle="addfavorite"]');
const tooltipListAddFavorite = [...addfavorite].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$("#enviarCorreo").click(function(){
 alert("El correo fue enviado correctamente...");
});

$("h4").dblclick(function () {
  $(this).css({
    color: "red",
  });
});

$(".card-title").click(function () {
	$(".card-text").toggle();
});

$(".doot-2").click(function () {
	$(".car-1").removeClass("active");
  $(".car-2").addClass("active");
});

$(".doot-1").click(function () {
	$(".car-2").removeClass("active");
  $(".car-1").addClass("active");
});