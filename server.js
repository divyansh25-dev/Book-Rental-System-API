const express = require('express')
const app = express()
const mongoose = require('mongoose')
var bodyParser = require('body-parser')

app.use(bodyParser.json())
mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

app.get('/',(req,res)=>{
    res.redirect('/admin');
})

const user = require('./routes/admin')
app.use('/admin', user);
const admin = require('./routes/user')
app.use('/user',admin);


app.listen(3000, () => console.log('Server Started'))