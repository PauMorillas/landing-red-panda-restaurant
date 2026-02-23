const indexItems = document.querySelectorAll(".index-item");

function setIcons() {
    indexItems.forEach((item) => {
        const arrowIcon = document.createElement("i");
        arrowIcon.classList = "bx bx-chevrons-right hidden-icon"; // Oculta el ícono inicialmente
        item.appendChild(arrowIcon);
    });
}

function switchContent() {
    indexItems.forEach((item) => {
        const arrowIcon = item.querySelector("i");

        item.addEventListener('mouseenter', () => {
            arrowIcon.classList.remove("hidden-icon"); // Muestra el ícono al hacer hover
        });

        item.addEventListener('mouseleave', () => {
            arrowIcon.classList.add("hidden-icon"); // Oculta el ícono al dejar de hacer hover
        });
    });
}

function hideBtn() {
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener('scroll', function() {
        if (window.scrollY > 1100) {    // Se mostrará a partir de esta altura en px
            backToTopButton.classList.remove("hidden");
        } else {
            backToTopButton.classList.add("hidden");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setIcons();
    switchContent();
    hideBtn();
});
