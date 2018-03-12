const https = require('https');
const express = require('express');
const path = require('path');
const fs = require('fs');
const helmet = require('helmet');
const PORT = process.env.PORT || 80;

const app = express();
app.use(helmet());
// setup
const config = require('./config');
const options = {
    cert: fs.readFile(config.cert),
    key:  fs.readFile(config.key)
};

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/projects.html'));
});

app.get('/resume', (req, res) => {
    res.contentType('application/pdf');
    res.sendFile(path.join(__dirname + '/public/resume/Resume.pdf'));
});

app.get('*', (req, res) => {
    res.send('404');
});

app.listen(PORT);
https.createServer(options, app).listen(8080);
