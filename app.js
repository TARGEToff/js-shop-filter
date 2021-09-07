window.addEventListener("DOMContentLoaded", () => {

    filterButtons = {
        all: document.querySelector(".filter__all"),
        cakes: document.querySelector(".filter__cakes"),
        cupcakes: document.querySelector(".filter__cupcakes"),
        sweets: document.querySelector(".filter__sweets"),
        donuts: document.querySelector(".filter__donuts")
    }

    items = {
        cupcakes: document.querySelector(".items__cupcakes"),
        cakes: document.querySelector(".items__cakes"),
        sweets: document.querySelector(".items__sweets"),
        donuts: document.querySelector(".items__donuts")
    }

    filterButtons.all.addEventListener("click", () => {
        items.cakes.style.display = "grid";
        items.cupcakes.style.display = "grid";
        items.sweets.style.display = "grid";
        items.donuts.style.display = "grid";
    });

    filterButtons.cakes.addEventListener("click", () => {
        items.cupcakes.style.display = "none";
        items.cakes.style.display = "grid";
        items.sweets.style.display = "none";
        items.donuts.style.display = "none";
    });

    filterButtons.cupcakes.addEventListener("click", () => {
        items.cakes.style.display = "none";
        items.cupcakes.style.display = "grid";
        items.sweets.style.display = "none";
        items.donuts.style.display = "none";
    });

    filterButtons.sweets.addEventListener("click", () => {
        items.cakes.style.display = "none";
        items.cupcakes.style.display = "none";
        items.sweets.style.display = "grid";
        items.donuts.style.display = "none";
    });

    filterButtons.donuts.addEventListener("click", () => {
        items.cakes.style.display = "none";
        items.cupcakes.style.display = "none";
        items.sweets.style.display = "none";
        items.donuts.style.display = "grid";
    });

});