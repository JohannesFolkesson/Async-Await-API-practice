const btn = document.createElement('button')
const input = document.createElement('input')
const result = document.createElement('div')

input.placeholder = 'Search...'
btn.textContent = 'Submit'

input.classList.add('input')
btn.classList.add('btn')

document.body.appendChild(input)
document.body.appendChild(btn)
document.body.appendChild(result)


btn.addEventListener('click', async () => {
       
    
    try {
        const pokemoname = input.value.toUpperCase();
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemoname}`
        const res = await fetch(url)

        if(!res.ok) {
            throw new Error("Nätverksfel");
            

    }
    const data = await res.json()


  const pokemonSprite = document.createElement('img');
        pokemonSprite.src = data.sprites.front_default;

        result.appendChild(pokemonSprite);
   
    result.innerHTML = `
    <img class = "pokemon-img" src="${data.sprites.front_default}">
    <p class = "poke-name"> ${data.name.toUpperCase()}</p>`;

    input.value = ""



} catch(error) {
 result.textContent = `Fel: ${error.message}`}


})

input.addEventListener('keydown', (e) => {
    
})










    


