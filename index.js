let parties = []
const list = document.querySelector(".list")
//const deleteButton = document.getElementsByClassName("deleteButton")

function render() {
    const html = parties.map((party) => {
        return `
            <h2>Party name: ${party.name}</h2>
            <p>Date & time: ${party.date}</p>
            <p>Location: ${party.location}</p>
            <p>Description: ${party.description}</p>
            <button class="deleteButton">Delete ${party.name}</button>
        `
    })
    list.innerHTML = html.join("")
}

// deleteButton.addEventListener("click", (event) => {
//     console.log(event)

// })

async function fetchParties() {
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310/events")
    console.log(response)
    const data = await response.json()
    parties = data.data
    console.log(parties)
    render()
}

fetchParties()