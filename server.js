
require("dotenv").config()
const express = require('express')
const axios = require('axios')
const cors = require('cors')


const app = express()
app.use(cors())
const urlLink = "https://api.nasa.gov/planetary/apod?api_key="
const url2 = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key="
const APOD = "https://api.nasa.gov/planetary/apod?api_key="


app.get('/api', async (req, res) => {
   
   await  axios.get(urlLink + process.env.key)
    .then(result => {
        const html = result.data
        res.json(html)
    }).catch((err) => {
        console.error(err)
    })
    
})


   



const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{console.log(`listening on port ${PORT}`)})
