const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express({defaultErrorHandler:false});

var port = process.env.PORT || 2121;

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req,res) => {
    res.send('<h1>API RUNNING : SUCCESS</h1>')
})

const { masterRouter} = require('./routers');

app.use('/diskusi', masterRouter);


app.listen(port, () => console.log('API Aktif di port ' + port))