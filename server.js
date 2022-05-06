
require("dotenv").config()
const express = require('express')
const axios = require('axios')
const cors = require('cors')


const app = express()
app.use(cors())
const urlLink = "https://api.nasa.gov/planetary/apod?api_key="
const neo = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key="
const epic = "https://api.nasa.gov/EPIC/api/natural/images?api_key="
const storm ="https://api.nasa.gov/DONKI/GST?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key="
const climate = ""

app.get('/api', async (req, res) => {
   
   await  axios.get(urlLink + process.env.key)
    .then(result => {
        const html = result.data
        res.json(html)
    }).catch((err) => {
        console.error(err)
    })
    
 })
//// testing 
app.get('/api/:id', async (req, res) => {

    switch (req.params.id) {
        case 'neo':
              await  axios.get(neo + process.env.key)
             .then(result => {
                 const html = result.data
                 res.json(html)
             }).catch((err) => {
                 console.error(err)
             })
        case 'epic':
             await  axios.get(epic + process.env.key)
             .then(result => {
                 const html = result.data
                 res.json(html)
             }).catch((err) => {
                 console.error(err)
             })
        case 'storm':
              await  axios.get(storm + process.env.key)
             .then(result => {
                 const html = result.data
                 res.json(html)
             }).catch((err) => {
                 console.error(err)
             })
        case 'climate':
            await  axios.get(climate + process.env.key)
            .then(result => {
                const html = result.data
                res.json(html)
            }).catch((err) => {
                console.error(err)
            })
    }
   
     
 })

   



const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{console.log(`listening on port ${PORT}`)})
