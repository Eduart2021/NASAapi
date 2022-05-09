const feed = document.getElementById('climate')
const feed1 = document.getElementById('climateOrder')
const feedImaga2 = document.getElementById('climateImage2')
const feedImaga3 = document.getElementById('climateImage3')



let response = []
fetch('http://localhost:3001/api/climate')
.then(response => response.json())
.then(data => { 
   response.push(data)

    response.forEach(article =>{
        const info = `<div>${article.name} </div>`
        const info1 = `<div>${article.order} </div>`
        const info3 = `<div><img src="${article.sprites.front_shiny}" alt="${article.species.name}" style="width:100px;height:100px;"></div>`
        const info2 = `<div><img src="${article.sprites.back_shiny}" alt="${article.species.name}" style="width:100px;height:100px;"></div>`
    
        feed.insertAdjacentHTML("beforeend", info)
        feed1.insertAdjacentHTML("beforeend", info1)
        feedImaga2.insertAdjacentHTML("beforeend", info2)
        feedImaga3.insertAdjacentHTML("beforeend", info3)
        
    })
    console.log(response);
})

// back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
// 
// back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png"
// 
// back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"

// front_shiny: