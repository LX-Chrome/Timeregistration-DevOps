document.addEventListener("DOMContentLoaded", function () {
    // Initialize Feather icons
    feather.replace();

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = themeToggle?.querySelector("i"); // Check of het element bestaat
    const htmlElement = document.documentElement;

    if (!themeToggle || !themeIcon) {
        console.error("Theme toggle button or icon not found!");
        return;
    }

    // Controleer opgeslagen thema of systeemvoorkeur
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("theme") || (prefersDark ? "dark" : "light");

    htmlElement.setAttribute("data-bs-theme", savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener("click", function () {
        const currentTheme = htmlElement.getAttribute("data-bs-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        htmlElement.setAttribute("data-bs-theme", newTheme);
        localStorage.setItem("theme", newTheme); 
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        themeIcon.setAttribute("data-feather", theme === "dark" ? "moon" : "sun");
        feather.replace(); // Icons opnieuw laden
    }

    // Standaarddatum instellen op vandaag
    const dateInput = document.getElementById("date");
    if (dateInput) {
        const today = new Date().toISOString().split("T")[0];
        dateInput.value = today;
    }

    // Bootstrap tooltips initialiseren
    var tooltipTriggerList = [].slice.call(document.querySelectorAll("[data-bs-toggle='tooltip']"));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Voeg animatie toe aan kaarten
    document.querySelectorAll(".card").forEach(card => {
        card.classList.add("animate-card");
    });

    // Voeg hover-effect toe aan tabelrijen
    document.querySelectorAll(".table tbody tr").forEach(row => {
        row.classList.add("hoverable-row");
    });

    // Alerts automatisch sluiten na 5 seconden
    const alerts = document.querySelectorAll(".alert");
    alerts.forEach(alert => {
        setTimeout(() => {
            const bsAlert = new bootstrap.Alert(alert);
            bsAlert.close();
        }, 5000);
    });

    // Voeg laadanimatie toe aan export-knoppen
    document.querySelectorAll('[href*="export"]').forEach(link => {
        link.addEventListener("click", function () {
            const icon = this.querySelector("i");
            if (icon) {
                icon.setAttribute("data-feather", "loader");
                feather.replace();
                icon.classList.add("spin");
            }
        });
    });
});
