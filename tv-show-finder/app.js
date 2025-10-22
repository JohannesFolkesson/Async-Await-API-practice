const input = document.querySelector('searchInput');
const btn = document.querySelector('searchBtn');
const div = document.querySelector('results');


btn.addEventListener('click', async () => {
    const query = searchInput.value.trim();
    if(!query)
        return;

    try{
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=QUERY`)
        if(!response.ok) throw new error('Nätverksfel')
            const data = await response.json()
        console.log(data)
        displayShows(data);
} catch (error) {
    div.innerHTML = `<p style="color:red;">Fel: ${error.message}</p>`;
}

    });
    function displayShows(shows) {
        div.innerHTML("")
    }
    if (shows.length === 0) {
        div.innerHTML = `<p "Inga serier hittades"'</p>`
        return;
    }

    shows.forEach(item => {
        const show = item.show;
            const image = show.image ? show.image.medium : "https://via.placeholder.com/210x295?text=No+Image";
        const showDiv = document.createElement('div');
        showDiv.classList.add("show");
            showDiv.innerHTML = `
      <img src="${image}" alt="${show.name}">
      <h2>${show.name}</h2>
      <p>${show.genres.join(", ")}</p>
      <a href="${show.url}" target="_blank">Mer info</a>
    `;
        div.appendChild(showDiv);
    })