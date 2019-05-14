const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express({defaultErrorHandler:false});

var port = process.env.PORT || 2019;

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req,res) => {
    res.send('<h1>API RUNNING</h1>')
})

const { authRouter, productRouter} = require('./routers');

app.use('/auth', authRouter);
app.use('/product', productRouter);


app.listen(port, () => console.log('API Aktif di port ' + port))