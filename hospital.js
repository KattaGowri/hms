// hospital.js

document.addEventListener("DOMContentLoaded", () => {
    // Highlight buttons on hover
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });

    // Redirect to corresponding login pages
    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const target = event.target.getAttribute("href");
            window.location.href = target;
        });
    });
});
