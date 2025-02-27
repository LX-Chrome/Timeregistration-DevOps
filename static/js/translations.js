
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
        "Werkmail": "Business Email",
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
        "Nieuwe Registratie": "New Registration",
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
        "Nieuwe Registratie Toevoegen": "Add New Entry",
        "Urenregistraties": "Time Entries",
        "Registratie Toevoegen": "Add Entry",
        "Exporteren": "Export",
        "Klanten Overzicht": "Customer Oversight",
        "Medewerkers Overzicht": "Employee Oversight",
        "Wijzigingen Opslaan": "Save Changes",
        "Nieuwe Klant": "New Customer",
        "Nieuwe Opdracht": "New Assignment",
        "Nieuwe Opdracht Toevoegen": "Add New Assignment",
    }
};

let currentLang = 'nl'; // Default language

function toggleLanguage() {
    currentLang = currentLang === 'nl' ? 'en' : 'nl';
    translatePage();
}

function translatePage() {
    if (currentLang === 'nl') return; // Dutch is default

    document.querySelectorAll('*').forEach(element => {
        // Skip elements with no direct text content
        if (!element.childNodes.length) return;

        element.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) { // Only modify text nodes, keeping icons intact
                let textContent = node.textContent.trim();

                // Handle dynamic "Goede dag, [username]!"
                if (textContent.startsWith("Goede dag")) {
                    node.textContent = textContent.replace("Goede dag", "Good day");
                    return;
                }

                // General translation lookup
                if (translations.en[textContent]) {
                    node.textContent = translations.en[textContent];
                }
            }
        });
    });

    // Special case: Translate placeholder text
    document.querySelectorAll('input[placeholder]').forEach(input => {
        const placeholderText = input.getAttribute('placeholder');
        if (translations.en[placeholderText]) {
            input.setAttribute('placeholder', translations.en[placeholderText]);
        }
    });
}
