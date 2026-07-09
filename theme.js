const button = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    button.textContent = "☀️ Light Mode";
    button.classList.replace("btn-outline-light", "btn-outline-dark");
}

// Toggle theme
button.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        button.textContent = "☀️ Light Mode";
        button.classList.replace("btn-outline-light", "btn-outline-dark");
        localStorage.setItem("theme", "light");
    } else {
        button.textContent = "🌙 Dark Mode";
        button.classList.replace("btn-outline-dark", "btn-outline-light");
        localStorage.setItem("theme", "dark");
    }
});