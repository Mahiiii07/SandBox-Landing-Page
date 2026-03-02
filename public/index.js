// NAVBAR
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const menuIcon = document.getElementById('menu-icon');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');

    const isOpen = menuIcon.getAttribute('name') === 'menu';
    menuIcon.setAttribute('name', isOpen ? 'close' : 'menu');
});

//  ACCORDION 
const accordionButtons = document.querySelectorAll('.accordion-btn');

accordionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = document.getElementById(btn.dataset.target);
        const icon = btn.querySelector('.accordion-icon');
        const title = btn.querySelector('.accordion-title');

        const isOpen = target.style.maxHeight !== "0px";

        // Close all items
        document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = "0px");
        document.querySelectorAll('.accordion-icon').forEach(i => i.classList.remove('rotate-180'));
        document.querySelectorAll('.accordion-title').forEach(t => {
            t.classList.remove("text-light-blue");
            t.classList.add("text-dark-gray");
        });

        // Open clicked one
        if (!isOpen) {
            target.style.maxHeight = target.scrollHeight + "px";
            icon.classList.add('rotate-180');
            title.classList.remove("text-dark-gray");
            title.classList.add("text-light-blue");
        }
    });
});


// /CAROUSEL
const track = document.getElementById("carousel-track");
const slides = track.children;

let index = 0;
let slideWidth = slides[0].offsetWidth + 46; // slide width + margins

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateButtons() {
    // Disable prev button on first slide
    if (index === 0) {
        prevBtn.classList.add("opacity-40", "cursor-not-allowed");
    } else {
        prevBtn.classList.remove("opacity-40", "cursor-not-allowed");
    }

    // Disable next button on last slide
    if (index === slides.length - 1) {
        nextBtn.classList.add("opacity-40", "cursor-not-allowed");
    } else {
        nextBtn.classList.remove("opacity-40", "cursor-not-allowed");
    }
}

// Initial update
updateButtons();

nextBtn.addEventListener("click", () => {
    if (index < slides.length - 3) {
        index++;
        track.style.transform = `translateX(-${slideWidth * index}px)`;
        updateButtons();
    }
});

prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
        track.style.transform = `translateX(-${slideWidth * index}px)`;
        updateButtons();
    }
});

