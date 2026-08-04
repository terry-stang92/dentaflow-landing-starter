document.addEventListener("DOMContentLoaded", () => {
    // 1. INTERSECTION OBSERVER PARA ANIMACIONES
    const observerOptions = {
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-active");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".reveal-fade-up, .reveal-left, .reveal-right, .reveal-zoom");
    animatedElements.forEach(el => scrollObserver.observe(el));

    // 2. MENÚ HAMBURGUESA EN MÓVILES
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-menu a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }

    // 3. LÓGICA DEL FORMULARIO A WHATSAPP
    const bookingForm = document.getElementById("appointmentForm");
    if (bookingForm) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            const service = document.getElementById("service").value;
            const date = document.getElementById("date").value;

            const myPhoneNumber = "521234567890"; // Cambiar por tu número

            const message = `Hello! I would like to book an appointment.%0A%0A` +
                            `👤 *Name:* ${encodeURIComponent(name)}%0A` +
                            `📞 *Phone:* ${encodeURIComponent(phone)}%0A` +
                            `🦷 *Service:* ${encodeURIComponent(service)}%0A` +
                            `📅 *Date:* ${encodeURIComponent(date)}`;

            window.open(`https://wa.me/${myPhoneNumber}?text=${message}`, "_blank");
        });
    }
});


