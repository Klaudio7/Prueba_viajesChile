const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$(document).ready(function () {

    let iconoCambiar1 = $("i")


    iconoCambiar1.click(function () {
        // // console.log(this)
        // $(this).hide()

        $(this).css({
            "color": "white", "background-color": "blue"

        })
    })









})