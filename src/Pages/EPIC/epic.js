const feed = document.getElementById('epic')



let response = []
fetch('http://localhost:3001/api/epic')
.then(response => response.json())
.then(data => { 
   response.push(data)
    
    response.forEach(article =>{
        const info = '<div><h3>'
            + article.date +'</h3></div>'
        feed.insertAdjacentHTML("beforeend", info)
    })
    console.log(data);
})