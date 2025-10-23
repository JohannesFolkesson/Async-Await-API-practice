const API_URL = "https://jsonplaceholder.typicode.com/todos";

async function getTodos() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("Alla todos:", data.slice(0, 5)); // visar bara de 5 första
    }
    catch(error) {
        console.error("Fel vid hämtning:", error.message);
    }

}
// STEG 1 Efter basic("POST")
async function createTodo() {
    try {
        const newTodo = {
            userId: 1, 
            title: "Lära mig REST API",
            completed: false
        };
        const response = await fetch(API_URL, {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newTodo)
        });
        const data = await response.json();
        console.log("Ny todo skapad:", data);

    } catch(error) {
        console.error("Fel vid skapande:", error.message);
    }
}



