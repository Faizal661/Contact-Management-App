const express = require('express');
const pool=require('./db')
const path=require('path')
const cors=require('cors')

const contactRouter=require('./routes/contact')

const app=express()
const port=3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'public')))

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use('/',contactRouter)


app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})