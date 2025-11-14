const input = document.createElement('input');
const btn = document.createElement('fetchBtn');

document.appendChild(input);
document.appendChild(btn);

btn.addEventListener('click', async () => {
    
    try {
        const res = await fetch('https://catfact.ninja/fact');
        if (!res.ok) throw new Error('Nätverksfel');
        const data = res.json();
        input.textContent = data.fact;
        input.textContent = "";

    }
    catch(error) {
        result.textContent = `Fel: ${error.message}`
    }
})