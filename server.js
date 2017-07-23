const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000
let app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'))
})

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/projects.html'))
})

app.get('/resume', (req, res) => {
    res.contentType('application/pdf')
    res.sendFile(path.join(__dirname + '/public/resume/Resume.pdf'))
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