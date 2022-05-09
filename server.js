
require("dotenv").config()
const express = require('express')
const axios = require('axios')
const cors = require('cors')


const app = express()
app.use(cors())
const urlLink = "https://api.nasa.gov/planetary/apod?api_key="
const neo = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key="
const epic = "https://api.nasa.gov/EPIC/api/natural/images?api_key="
const storm ="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&api_key="
const climate = "https://pokeapi.co/api/v2/pokemon/ditto"


app.get('/api', (req, res) => {
   
   axios.get(urlLink + process.env.key)
    .then(result => {
        const html = result.data
        res.json(html)
    }).catch((err) => {
        console.error(err)
    })
    
 })
 
//// testing 
app.get('/api/:id', (req, res) => {

    switch (req.params.id) {
        case 'neo':
              axios.get(neo + process.env.key)
             .then(result => {
                 const html = result.data
                 res.json(html)
             }).catch((err) => {
                 console.error(err)
             })
        case 'epic':
             axios.get(epic + process.env.key)
             .then(result => {
                 const html = result.data
                 res.json(html)
             }).catch((err) => {
                 console.error(err)
             })
        case 'storm':
              axios.get(storm + process.env.key)
             .then(result => {
                 const html = result.data
                 res.json(html)
             }).catch((err) => {
                 console.error(err)
             })
        case 'climate':
            axios.get(climate ) // + process.env.key
            .then(result => {
                const html = result.data
                res.json(html)
            }).catch((err) => {
                console.error(err)
            })
    }
   
     
 })

   
 const baseUrl =  "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"


 app.get('/pokemons', (req, res) => {
     axios.get(baseUrl)
     .then((response)=>{
         const html = response.data
         res.json(html)
     })
 })


const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{console.log(`listening on port ${PORT}`)})
