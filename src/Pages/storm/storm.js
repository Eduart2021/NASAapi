const feed = document.getElementById('titleStorm')
const images = document.getElementById('stormImage')


let response = []
fetch('http://localhost:3001/api/storm')
.then(response => response.json())
.then(data => { 
   response.push(data)

    response.forEach(article =>{
        const info = `<div><h3>${article.earth_date}</h3></div>`
        feed.insertAdjacentHTML("beforeend", info)
    })
    console.log(response);
})

//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=
// photos: Array(856)
// [0 … 99]
// 0:
// camera: {id: 20, name: 'FHAZ', rover_id: 5, full_name: 'Front Hazard Avoidance Camera'}
// earth_date: "2015-05-30"
// id: 102693
// img_src: 