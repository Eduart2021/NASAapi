const feed = document.getElementById('list')


// let response = []
// let lol = fetch('http://localhost:3001/api')
// .then(response => response.json())
// .then(data => { 
//    response.push(data)
//     response.forEach(article =>{
//         const info = '<div><h3>'
//            + article.title + '</h3></div>'
//         feed.insertAdjacentHTML("beforeend", info)
//     })
// })
let response = []
fetch('http://localhost:3001/api')
.then(response => response.json())
.then(data => { 
   response.push(data)

    response.forEach(article =>{
        const info = '<div><h3>'
           + article.title + article.date +'</h3><img src="'
           + article.url + '" title="NASA" style="width:100%;" height:100%;/></div>'
        feed.insertAdjacentHTML("beforeend", info)
    })
    console.log(data);
})