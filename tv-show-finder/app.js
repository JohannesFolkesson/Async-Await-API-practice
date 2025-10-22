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
            
    }
})