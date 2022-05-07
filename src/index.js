
const titleMain = document.getElementById('title')
const feedImage = document.getElementById('image')
const imgauthor = document.getElementById('author')
const textPara = document.getElementById('textPara')
const feedHD = document.getElementById('hdImage')
const dateAs = document.getElementById('dateTaken')

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
        const info2 = `<div>${article.title}</div>`
        const info3 = `<div><img src="${article.url}" style="width:100%;max-width:1000px" class="w3-margin-top"></div>`
        const imgAuthor = `<div>Author ${article.copyright}</div>`
        const paragraph = `<p style="text-align:justify; font-weight:none">${article.explanation}</p>`
        const dateTaken = `<p>${article.date}</p>`

        titleMain.insertAdjacentHTML("beforeend", info2)
        feedImage.insertAdjacentHTML("beforeend", info3)
        imgauthor.insertAdjacentHTML("beforeend", imgAuthor)
        textPara.insertAdjacentHTML("beforeend",paragraph)
        dateAs.insertAdjacentHTML("beforeend", dateTaken)
    })  
})

function showHD(){
    response.forEach(image =>{
        let imageElement = document.getElementById("HDImage")
     if(imageElement <= 1 ){
        const img = `<img src="${image.hdurl}" alt="HdImage" id="HDImage"></img>`
        feedHD.insertAdjacentHTML("beforeend",img)
       }
    })
}
