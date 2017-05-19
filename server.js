const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000 || process.env.PORT


app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/index.html'))
})

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/projects.html'))
})

app.listen(PORT, err => {
    if (err)
        return console.log(err)

    console.log(`Server started`)
})