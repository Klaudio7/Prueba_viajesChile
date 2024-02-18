const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$(document).ready(function () {

    let iconoCambiar1 = $("#icono1")
    let iconoCambiar2 = $("#icono2")
    let iconoCambiar3 = $("#icono3")



    iconoCambiar1.addClass("bg-info")



})