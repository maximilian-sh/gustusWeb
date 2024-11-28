document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    // Testimonial Slider
    const testimonials = [
        { name: "John D.", text: "MixMaster has transformed my home bar experience!" },
        { name: "Sarah L.", text: "I love discovering new cocktail recipes with this app." },
        { name: "Mike R.", text: "The ingredient tracker feature is a game-changer." },
    ];

    const testimonialSlider = document.querySelector(".testimonial-slider");
    testimonials.forEach((testimonial) => {
        const testimonialCard = document.createElement("div");
        testimonialCard.classList.add("testimonial-card");
        testimonialCard.innerHTML = `
            <p>"${testimonial.text}"</p>
            <h4>${testimonial.name}</h4>
        `;
        testimonialSlider.appendChild(testimonialCard);
    });
});
