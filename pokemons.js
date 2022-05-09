const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(cors())

const baseUrl =  "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"


app.get('/pokemons', (req, res) => {
    axios.get(baseUrl)
    .then((response)=>{
        const html = response.data
        res.json(html)
    })
})


const port = process.env.PORT || 3001
app.listen(port, ()=>console.log('listening on port'+port))
