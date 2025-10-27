const btn = document.createElement('fetchBtn');
const result = document.createElement('result');

btn.addEventListener('click', async () => {
    try {
        const res = await fetch('https://catfact.ninja/fact');
        if(!res.ok) throw new Error('Nätverksfel');
        const data = await res.json();
        result.textContent = data.fact;
    }
    catch(error) {
        result.textContent = `Fel: ${error.message}`

    }
})