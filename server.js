const express = require('express')
const app = express()
const playerRoute = require('./players/route')


const server = app.listen(3000,()=>{
    console.log(" App is running")
})

app.get('/',(req,res)=>{
    res.send("My first express project")
})

app.use('/api/v1',playerRoute)

module.exports = app