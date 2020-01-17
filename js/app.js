// Variables que se usan
const rootStyles = getComputedStyle(document.documentElement)

let btnTop = document.getElementById("btnTop")
let alert = document.getElementsByClassName("alert")
let tabs = document.getElementsByClassName("tabs")
let modalLinks = document.getElementsByClassName("modal-link")
let accordion = document.getElementsByClassName("accordion-link")
let header = document.getElementById("header")
let gutter = parseFloat(rootStyles.getPropertyValue('--gutter').split('rem')[0])
let topHeight = header.offsetHeight + (gutter * 16)
let autoGrid = document.querySelectorAll(".grid-container.auto-columns")
let iconToggle = document.querySelectorAll(".icon-toggle")

// Botón subir arriba
btnTop.addEventListener('click', function (e) {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
});

// Meter iconos a las alertas
function alertIcons() {
    for (let i = 0; i < alert.length; i++) {

        if (alert[i].classList.contains('alert-success')) {

            alert[i].innerHTML = '<i class="fas fa-check-circle"></i>' + alert[i].innerHTML

        } else if (alert[i].classList.contains('alert-warning')) {

            alert[i].innerHTML = '<i class="fas fa-exclamation-triangle"></i>' + alert[i].innerHTML

        } else if (alert[i].classList.contains('alert-danger')) {

            alert[i].innerHTML = '<i class="fas fa-times-circle"></i>' + alert[i].innerHTML

        } else if (alert[i].classList.contains('alert-info')) {

            alert[i].innerHTML = '<i class="fas fa-info-circle"></i>' + alert[i].innerHTML

        }

    }
}


// Margin top Header Fixed
function headerFixed() {
    if (header.classList.contains('fixed')) {
        document.documentElement.style.setProperty('--header-height', (header.offsetHeight) - 1 + 'px')
    }
}

// Enlaces de ancla
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        if(link.getAttribute('href') != '#') {
            let topOfElement = document.querySelector(link.getAttribute('href')).offsetTop - topHeight
            window.scroll({
                top: topOfElement,
                behavior: "smooth"
            })
        }

    });
});

// Marcar enlaces ancla
function activeLink() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.classList.remove('active')
        if(link.getAttribute('href') != '#')  {
            let topHeight = header.offsetHeight + (gutter * 16)
            let scrollPos = document.documentElement.scrollTop;

            let topOfElement = document.querySelector(link.getAttribute('href')).offsetTop - topHeight
            let heigthOfElement = document.querySelector(link.getAttribute('href')).offsetHeight

            if (topOfElement <= scrollPos && (topOfElement + heigthOfElement) > scrollPos) {
                link.classList.add('active')
            }
        }
    });
}


// Tabs
for (let i = 0; i < tabs.length; i++) {
    let tabLink = tabs[i].getElementsByClassName('tab');

    for (let i = 0; i < tabLink.length; i++) {
        tabLink[i].addEventListener('click', function (e) {
            e.preventDefault()

            for (let i = 0; i < tabLink.length; i++) {
                tabLink[i].classList.remove('active')
                document.getElementById(tabLink[i].getAttribute('data-link')).classList.remove('active')
            }

            let panel = document.getElementById(tabLink[i].getAttribute('data-link'))
            tabLink[i].classList.add('active')
            panel.classList.add('active')
        });
    }
}


// Modals
for (let i = 0; i < modalLinks.length; i++) {
    modalLinks[i].addEventListener('click', function (e) {
        e.preventDefault()

        let Modal = document.getElementById(modalLinks[i].getAttribute('data-link'))
        Modal.classList.add('active')

        Modal.addEventListener('click', function (e) {
            if(e.target == Modal) Modal.classList.remove('active')
        });

        addEventListener('keyup', function (e) {
            if(e.key === 'Escape') Modal.classList.remove('active')
        });
    });
}


// Accordion
for (let i = 0; i < accordion.length; i++) {

    accordion[i].innerHTML = accordion[i].innerHTML + '<i class="fas fa-chevron-right"></i>'

    accordion[i].addEventListener('click', function (e) {
        e.preventDefault()

        accordion[i].classList.toggle("active");
    });
}

// Grid auto columns
function columnsGrid() {
    for (let i = 0; i < autoGrid.length; i++) {
        if(autoGrid[i].dataset.min >= autoGrid[i].offsetWidth) {
            autoGrid[i].style.setProperty('--min-grid', '1fr');
        } else {
            autoGrid[i].style.setProperty('--min-grid', autoGrid[i].dataset.min + 'px');
        }
    }
}

// Icon toggle
for (let i = 0; i < iconToggle.length; i++) {
    iconToggle[i].addEventListener('click', function (e) {
        e.preventDefault()
        let show = iconToggle[i].dataset.toggle
        document.getElementById(show).classList.toggle("show")
    });
}


(function () {
    alertIcons()
    headerFixed()
    columnsGrid()
    window.onresize = function (event) {
        headerFixed()
        columnsGrid()
    };
    window.onscroll = function (event) {
        activeLink()
        if (document.documentElement.scrollTop > 20) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    };
})();

// Import here your libraries
import './prism.js';