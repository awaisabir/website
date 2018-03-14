const https = require('https');
const http  = require('http');
const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 80;

const app = express();

// setup
const config = require('./config');
const options = {
    cert: fs.readFileSync(config.cert),
    key:  fs.readFileSync(config.key)
};

app.use(express.static(__dirname + '/public', {dotfiles:'allow'}));

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

http.createServer(app).listen(80);
https.createServer(options, app).listen(443);
	

