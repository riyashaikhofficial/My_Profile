const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(__dirname))

app.listen(4000, ()=>{
    console.log('Server is running on port 4000')
})