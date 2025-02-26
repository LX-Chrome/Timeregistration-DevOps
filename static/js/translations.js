
const translations = {
    en: {
        "Dashboard": "Dashboard",
        "Tijdregistratie": "Time Registration",
        "Klanten": "Customers",
        "Medewerkers": "Employees",
        "Opdrachten": "Assignments",
        "Bewerken": "Edit",
        "Verwijderen": "Delete",
        "Zoeken": "Search",
        "Annuleren": "Cancel",
        "Nieuwe Medewerker": "New Employee",
        "Voornaam": "First Name",
        "Tussenvoegsel": "Middle Name",
        "Achternaam": "Last Name",
        "Geboortedatum": "Date of Birth",
        "Functie": "Role",
        "Werkmail": "Work Email",
        "Kantoorruimte": "Office Space",
        "Uren": "Hours",
        "Uitloggen": "Log Out",
        "Nieuwe Klant Toevoegen": "Add New Customer",
        "Bedrijfsnaam": "Company Name",
        "Klant Toevoegen": "Add Customer",
        "Telefoonnummer": "Phone Number",
        "Nieuwe Medewerker Toevoegen": "Add New Employee",
        "Medewerker Toevoegen": "Add Employee",
        "Notitie": "Note",
        "Recente Urenregistraties": "Recent Time Entries",
        "Goede dag": "Good day",
        "Recente Check-ins": "Recent Check-ins",
        " Nieuwe Registratie": " New Registration",
        "Datum": "Date",
        "Omschrijving": "Description",
        "Aan het werk": "Working",
        "Pauze": "On Break",
        "Klaar voor vandaag": "Done for today",
        "Naam": "Name",
        "Telefoon": "Phone",
        "Klant": "Customer",
        "Titel": "Title",
        "Benodigde Kennis": "Required Knowledge",
        "Waar ben je mee bezig?": "What are you busy with?",
        "Adres": "Address",
        "Aanvraagdatum": "Request Date",
        "Opdracht Toevoegen": "Add Assignment",
        "Selecteer een klant...": "Select a customer...",
        "Acties": "Actions",
        "Nieuwe Registratie Toevoegen": "Add New Entry"
    }
};

let currentLang = 'nl'; // Default language

function toggleLanguage() {
    currentLang = currentLang === 'nl' ? 'en' : 'nl';
    translatePage();
}

function translatePage() {
    document.querySelectorAll('*').forEach(element => {
        if (element.children.length === 0) { // Skip elements that contain other elements
            let textContent = element.textContent.trim();

            // Handle dynamic "Goede dag, [username]!"
            if (textContent.startsWith("Goede dag")) {
                element.textContent = textContent.replace("Goede dag", "Good day");
                return; // Skip normal translation logic for this element
            }

            // General translation lookup
            if (translations.en[textContent]) {
                element.textContent = translations.en[textContent];
            }
        }
    });

    // Special case: Translate placeholder text
    document.querySelectorAll('input[placeholder]').forEach(input => {
        const placeholderText = input.getAttribute('placeholder');
        if (translations.en[placeholderText]) {
            input.setAttribute('placeholder', translations.en[placeholderText]);
        }
    });
}

// Run translation on page load
document.addEventListener('DOMContentLoaded', () => {
    translatePage();
});