
"use strict";

//mobile-menu
const btnMobileActive = document.querySelector(".burger-menu");
const btnMobileItem = document.querySelector(".burger-line");
const mobileMenu = document.querySelector(".navigation");
const linkMobileMenu = document.querySelectorAll(".nav__link");

btnMobileActive.addEventListener("click", () => {
    let delay = getComputedStyle(btnMobileItem).transitionDuration;
    delay = parseFloat(delay) * 1000;

    if (!btnMobileItem.classList.contains("burger-line-active")) {
        document.body.style.overflow = "hidden";
        btnMobileItem.classList.add("burger-line-active");
        mobileMenu.classList.add("menu-mobile-active");

        setTimeout( () => {
            btnMobileItem.classList.add("burger-line-animate");
        }, delay );

        for (let elem of linkMobileMenu) {
            elem.classList.add("nav__link-active");
        }

    } else {

        for (let elem of linkMobileMenu) {
            elem.classList.remove("nav__link-active");

            setTimeout( () => elem.hidden = true, 100 );
            
        }

        document.body.style.overflow = "";
        btnMobileItem.classList.remove("burger-line-animate");
        mobileMenu.classList.remove("menu-mobile-active");

        setTimeout( () => {
            btnMobileItem.classList.remove("burger-line-active");

            for (let elem of linkMobileMenu) {
                elem.hidden = false;
            }

        }, delay );
    }

});















