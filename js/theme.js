const button = document.getElementById("themeToggle");

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("themeToggle");

    // Load saved theme
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        button.textContent = "☀️ Light";
        button.classList.replace("btn-outline-light", "btn-outline-dark");
    }

    // Toggle theme
    button.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            button.textContent = "☀️ Light";
            button.classList.replace("btn-outline-light", "btn-outline-dark");
            localStorage.setItem("theme", "light");
        } else {
            button.textContent = "🌙 Dark";
            button.classList.replace("btn-outline-dark", "btn-outline-light");
            localStorage.setItem("theme", "dark");
        }
    });
});

window.copyEmail = function () {
    const email = "mfalayon@fit.edu.ph";

    navigator.clipboard.writeText(email).then(() => {
        const alertBox = document.getElementById("copyAlert");
        if (alertBox) {
            alertBox.style.display = "block";
            setTimeout(() => {
                alertBox.style.display = "none";
            }, 2000);
        } else {
            alert("Email copied!");
        }
    });
};