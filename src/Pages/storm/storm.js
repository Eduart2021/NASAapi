const feed = document.getElementById('storm')


let response = []
fetch('http://localhost:3001/api')
.then(response => response.json())
.then(data => { 
   response.push(data)

    response.forEach(article =>{
        const info = '<div>'
        '<h3>'+ article.title + '</h3>'
           '<p>'+ article.date +'</p>'
           '<img src="'
           + article.url + '" title="NASA" style="width:100%;" height:100%;/>'
           '<p>'+ article.explanation +'</p>'
           
           '</div>'
        feed.insertAdjacentHTML("beforeend", info)
    })
})

// copyright: 
// date: 
// explanation: 
// hdurl: "https://apod.nasa.gov/apod/image/2205/PyramidPlanets_Fatehi_8356.jpg"
// media_type: "image"
// service_version: "v1"
// title: "Planets Over Egyptian Pyramid"
// url: image jpg

//api = https://api.nasa.gov/DONKI/GST?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=