document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Sticky Navigation
    const sidebar = document.querySelector('.sidebar');
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) {
                sidebar.classList.add("sticky");
            } else {
                sidebar.classList.remove("sticky");
            }
        },
        { threshold: 0.1 }
    );
    observer.observe(document.querySelector("header"));

    // Product Card Lightbox Effect
    const productImages = document.querySelectorAll(".product-card img");
    productImages.forEach((img) => {
        img.addEventListener("click", () => {
            showLightbox(img.src, img.alt);
        });
    });

    function showLightbox(src, alt) {
        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${src}" alt="${alt}">
                <span class="close-lightbox">&times;</span>
            </div>
        `;
        document.body.appendChild(lightbox);

        // Close lightbox
        document.querySelector(".close-lightbox").addEventListener("click", () => {
            lightbox.remove();
        });
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) lightbox.remove();
        });
    }

    // Animation on Scroll (using Intersection Observer)
    const sections = document.querySelectorAll("section");
    const observerOptions = {
        root: null,
        threshold: 0.2,
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, observerOptions);

    sections.forEach((section) => {
        section.classList.add("hidden");
        revealOnScroll.observe(section);
    });

    // Form Validation
    const form = document.querySelector("form");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Thank you for reaching out! We will respond soon.");
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;

        // Validate name
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name is required");
            isValid = false;
        } else {
            clearError(nameInput);
        }

        // Validate email
        if (!/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(emailInput.value)) {
            showError(emailInput, "Please enter a valid email");
            isValid = false;
        } else {
            clearError(emailInput);
        }

        return isValid;
    }

    function showError(input, message) {
        const parent = input.parentElement;
        let error = parent.querySelector(".error-message");
        if (!error) {
            error = document.createElement("span");
            error.classList.add("error-message");
            parent.appendChild(error);
        }
        error.textContent = message;
    }

    function clearError(input) {
        const error = input.parentElement.querySelector(".error-message");
        if (error) error.remove();
    }

    // Back-to-Top Button
    const backToTopBtn = document.createElement("button");
    backToTopBtn.classList.add("back-to-top");
    backToTopBtn.innerHTML = "&uarr;";
    document.body.appendChild(backToTopBtn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
