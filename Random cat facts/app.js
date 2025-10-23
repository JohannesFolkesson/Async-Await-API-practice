const btn = document.getElementById("fetchBtn");
const result = document.getElementById("result");

btn.addEventListener('click', async () => {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        if(!response.ok) throw new Error('Nätverksfel')
            const data = await response.json()

            result.textContent = data.fact;
    }
        catch (error) {
            result.textContent = `Fel: ${error.message}`;

        }

}) 
