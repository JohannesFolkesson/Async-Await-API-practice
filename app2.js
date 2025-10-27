const btn = document.createElement('button');
const result = document.createElement('div');

document.body.appendChild(btn);
document.body.appendChild(result);

btn.addEventListener('click', async () => {

    try {
        const res = await fetch('https://catfact.ninja/fact')
        if (!res.ok) throw new Error('Nätverksfel');
        const data = res.json();
        result.textContent = data.fact;
        }
        catch(error){
            result.textContent = `Fel: ${error.message}`;
        }
    }
)