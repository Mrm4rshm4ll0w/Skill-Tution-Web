/* ================= HERO PARALLAX ================= */
const hero = document.querySelector('.hero-visual');

if (hero) {
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 40;
        const y = (window.innerHeight / 2 - e.clientY) / 40;
        hero.style.transform = `translate(${x}px, ${y}px)`;
    });
}

/* ================= NAVBAR SCROLL ================= */
const navbar = document.querySelector(".hero-navbar");

window.addEventListener("scroll", () => {
    if (!navbar) return;
    navbar.classList.toggle("nav-scrolled", window.scrollY > 20);
    navbar.classList.toggle("scrolled", window.scrollY > 80);
});

/* ================= FAQ ================= */
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        document.querySelectorAll('.faq-item').forEach(i => {
            if (i !== item) i.classList.remove('active');
        });
        item.classList.toggle('active');
    });
});

/* ================= GO TO TOP ================= */
const goTopBtn = document.getElementById("goTopBtn");

if (goTopBtn) {
    window.addEventListener("scroll", () => {
        goTopBtn.classList.toggle(
            "show",
            document.documentElement.scrollTop > 200
        );
    });

    goTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/* ================= INPUT FLOAT LABEL ================= */
document.querySelectorAll(".input").forEach(input => {
    input.addEventListener("focus", function () {
        this.parentNode.classList.add("focus");
    });

    input.addEventListener("blur", function () {
        if (this.value === "") {
            this.parentNode.classList.remove("focus");
        }
    });
});

/* ================= TESTIMONIAL SLIDER ================= */
document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".testimonial-card");
    const dots = document.querySelectorAll(".testimonial-dots .dot");

    // ❗ SAFETY CHECK
    if (cards.length === 0) return;

    let currentIndex = 0;
    let interval;

    function showCard(index) {
        if (!cards[index]) return;

        cards.forEach(card => {
            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";
            card.classList.remove("highlight");
        });

        cards[index].style.opacity = "1";
        cards[index].style.transform = "translateY(0)";
        cards[index].classList.add("highlight");

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    function startAutoSlide() {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % cards.length;
            showCard(currentIndex);
        }, 4000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    showCard(currentIndex);
    startAutoSlide();

    cards.forEach(card => {
        card.addEventListener("mouseenter", stopAutoSlide);
        card.addEventListener("mouseleave", startAutoSlide);
    });

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            currentIndex = i;
            showCard(currentIndex);
            stopAutoSlide();
            startAutoSlide();
        });
    });

    /* ================= SCROLL REVEAL ================= */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    document
        .querySelectorAll(".testimonials-left, .testimonial-card")
        .forEach(el => observer.observe(el));
});

/* ================= LOGO MODAL ================= */
document.querySelectorAll('.logo-img').forEach(img => {
    img.addEventListener('click', function () {
        const modalImg = document.getElementById('modalLogo');
        const modalEl = document.getElementById('logoModal');

        if (!modalImg || !modalEl) return;

        modalImg.src = this.src;
        new bootstrap.Modal(modalEl).show();
    });
});

/* ================= IMAGE POPUP ================= */
function openImage(card) {
    const img = card.querySelector("img");
    const popup = document.getElementById("imagePopup");
    const popupImg = document.getElementById("popupImg");

    if (!img || !popup || !popupImg) return;

    popupImg.src = img.src;
    popup.style.display = "flex";
}

function closeImage() {
    const popup = document.getElementById("imagePopup");
    if (popup) popup.style.display = "none";
}


document.addEventListener("DOMContentLoaded", () => {

    // Select all images inside gallery-card
    const images = document.querySelectorAll(".gallery-card img");
    const carouselInner = document.getElementById("carouselImages");
    const modal = new bootstrap.Modal(document.getElementById("galleryModal"));

    // Clear any existing slides
    carouselInner.innerHTML = "";

    images.forEach((img, index) => {
        // Create carousel slide
        const slide = document.createElement("div");
        slide.className = "carousel-item";
        if (index === 0) slide.classList.add("active");

        slide.innerHTML = `<img src="${img.src}" class="d-block w-100" alt="Client Review">`;
        carouselInner.appendChild(slide);

        // Add click event to open modal at correct slide
        img.addEventListener("click", () => {
            document.querySelectorAll(".carousel-item").forEach(i => i.classList.remove("active"));
            carouselInner.children[index].classList.add("active");
            modal.show();
        });
    });

});


window.addEventListener("scroll", () => {
    const nav = document.querySelector(".hero-navbar-light");
    nav.classList.toggle("scrolled", window.scrollY > 60);
});

const faqItems = document.querySelectorAll('.maf-faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        // Close all FAQ items
        faqItems.forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.display = 'none';
            }
        });

        // Toggle clicked FAQ
        item.classList.toggle('active');
        const answer = item.querySelector('.faq-answer');
        if (item.classList.contains('active')) {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});

/* ================= ACTIVE NAV LINK ================= */
const navLinks = document.querySelectorAll(".hero-navbar .nav-link");

// Set active on click
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});


/* ================= SERVICE TAB ACTIVE (JS) ================= */
const serviceTabs = document.querySelectorAll(".service-tabs .nav-link");

serviceTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Remove active from all
        serviceTabs.forEach(t => t.classList.remove("active"));

        // Add active to clicked tab
        tab.classList.add("active");
    });
});

/* ================= COURSE BUTTON ACTIVE (PAGE BASED) ================= */
const courseBtns = document.querySelectorAll(".course-btn");
const currentPage = location.pathname.split("/").pop();

courseBtns.forEach(btn => {
    const href = btn.getAttribute("href");

    if (href === currentPage) {
        btn.classList.add("active");
    } else {
        btn.classList.remove("active");
    }
});
