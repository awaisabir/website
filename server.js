const express = require('express')
const path = require('path')
const PORT = 3000 || process.env.PORT
let app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/index.html'))
})

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/projects.html'))
})

app.get('*', (req, res) => {
    res.send('404')
})

app.listen(PORT, err => {
    if (err)
        console.log(err)
    else
        console.log(`Server started`)
})