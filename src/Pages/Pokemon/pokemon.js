const first = document.getElementById('pke1')

let response = []
fetch('http://localhost:3001/pokemons')
.then(response => response.json())
.then(data =>{
    response.push(data)

    response.forEach(article =>{
        
        for(let i=0; i<article.results.length; i++){
            const feed1 =`<p>Name ${article.results[i].name}, at ${article.results[i].url}</p>`
            first.insertAdjacentHTML("beforeend",feed1) 
        }
        
    })
    console.log(response);
})
// call for one url
const loadData = async ()=>{
    try {
        const url = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20'
    const res = await fetch(url)
    console.log(res.ok)
    const data = await res.json()
    return data
    } catch (error) {
        console.error(error)
    }
}
loadData().then((gotOne) => console.log(gotOne))

// call for a group of urls

const loadMulti = async ()=> {

    try {
        const url1 = 'https://pokeapi.co/api/v2/pokemon'
        const url2 = 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=20'
        const url3 = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20'

        const results = await Promise.all([
            fetch(url1),
            fetch(url2),
            fetch(url3)
        ])
        const dataPromise = results.map(result => result.json())
        const finalData = await Promise.all(dataPromise)
        return finalData

    } catch (error) {
        console.error(error)
    }
}
(async()=>{
    const data = await loadMulti()
    console.log(data)
})()