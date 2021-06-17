const menu = document.querySelector("#mobile-menu")
const menuList=document.querySelector(".navbar-menu")
const navlogo=document.querySelector("#navbar-logo")

// Display Mobile Menu

const mobileMenu = ()=> {
    menu.classList.toggle("is-active")
    menuList.classList.toggle("active")
}

menu.addEventListener("click",mobileMenu);

// Show active menu while scrolling

const highlightMenu = () => {
    const element=document.querySelector(".highlight")
    const homeMenu=document.querySelector("#home-page")
    const aboutMenu=document.querySelector("#about-page")
    const servicesPage=document.querySelector("#service-page")
    let scrollPos= window.scrollY

    // add hightlight class to menu

    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        return 
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add("highlight")
        homeMenu.classList.remove("highlight")
        servicesPage.classList.remove("highlight")
        return
    }
    else if (window.innerWidth > 960 && scrollPos < 2345) {
        servicesPage.classList.add("highlight")
        aboutMenu.classList.remove("highlight")
        return
    }
    if ((element && window.innerWidth<960 && scrollPos < 600 || element)) {
        element.classList.remove("highlight")
    }
}

window.addEventListener("scroll",highlightMenu)
window.addEventListener("click",highlightMenu)

// Close mobile menu on click
const hideMobileMenu = () => {
    const menuBars = document.querySelector(".is-active")
    if (window.innerWidth<=960 && menuBars) {
        menu.classList.toggle("is-active")
        menuList.classList.remove("active")
    }
}

menuList.addEventListener("click",hideMobileMenu)
navlogo.addEventListener("click",hideMobileMenu)