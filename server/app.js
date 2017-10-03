const express = require('express');
const app = express();
const path = require('path');


const PORT=process.env.PORT || 3000;

// static routing
app.use('/style', express.static(path.join(__dirname, '../style')))
app.use('/scripts', express.static(path.join(__dirname, '../scripts')))
app.use('/samples', express.static(path.join(__dirname, '../samples')))
app.use('/jquery', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use('/tone', express.static(path.join(__dirname, '../node_modules/tone/build/')))

app.set('port', (process.env.PORT || 3000));

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(500).send(err);
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT);
