const feed = document.getElementById('neo')


let response = []
fetch('http://localhost:3001/api/neo')
.then(response => response.json())
.then(data => { 
   response.push(data)

    response.forEach(article =>{
        const info = `<div><h3>${article.title}</h3><p>${article.date}</p>
           <p>${article.explanation}</p></div>`
        feed.insertAdjacentHTML("beforeend", info)
    })
})