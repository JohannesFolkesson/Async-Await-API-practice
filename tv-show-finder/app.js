// Hämta HTML-elementen från sidan med deras ID
const input = document.querySelector('#searchInput'); // Textfält där användaren skriver sitt sökord
const btn = document.querySelector('#searchBtn');     // Knappen som användaren klickar på för att söka
const div = document.querySelector('#results');       // Div där sökresultaten kommer att visas

// Lägg till en "click"-händelse på knappen
btn.addEventListener('click', async () => {
    // Hämta texten från inputfältet och ta bort extra mellanslag
    const query = input.value.trim();

    // Om fältet är tomt, gör ingenting
    if(!query) return;

    try {
        // Skicka en GET-förfrågan till TVMaze API med användarens sökord
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);

        // Kolla om svaret är lyckat (status 200-299)
        if(!response.ok) throw new Error('Nätverksfel');

        // Konvertera API-svaret från JSON till ett JavaScript-objekt
        const data = await response.json();

        // Logga datan i konsolen (bra för debug)
        console.log(data);

        // Visa sökresultaten på sidan
        displayShows(data);

    } catch (error) {
        // Om något går fel, visa ett rött felmeddelande i resultatområdet
        div.innerHTML = `<p style="color:red;">Fel: ${error.message}</p>`;
    }
});

// Funktion för att visa resultaten på sidan
function displayShows(shows) {
    // Rensa tidigare resultat
    div.innerHTML = "";

    // Om inga serier hittades, visa meddelande och avsluta funktionen
    if (shows.length === 0) {
        div.innerHTML = `<p>Inga serier hittades.</p>`;
        return;
    }

    // Loopa igenom alla serier som API:t returnerat
    shows.forEach(item => {
        const show = item.show; // Varje item innehåller ett "show"-objekt

        // Kolla om serien har en bild, annars använd en placeholder
        const image = show.image ? show.image.medium : "https://via.placeholder.com/210x295?text=No+Image";

        // Skapa ett nytt div-element för varje serie
        const showDiv = document.createElement('div');
        showDiv.classList.add("show"); // Lägg till en CSS-klass för styling

        // Lägg till innehåll i div: bilden, namn, genre och länk
        showDiv.innerHTML = `
            <img src="${image}" alt="${show.name}">
            <h2>${show.name}</h2>
            <p>${show.genres.join(", ")}</p>
            <a href="${show.url}" target="_blank">Mer info</a>
        `;

        // Lägg till den nya serien i resultatområdet på sidan
        div.appendChild(showDiv);
    });
}

// Extra: Lyssna på Enter-tangenten så att användaren kan söka utan knapptryck
input.addEventListener('keyup', (e) => {
    if(e.key === "Enter") btn.click(); // Om Enter trycks, trigga knappens klick-event
});
