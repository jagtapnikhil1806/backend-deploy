import express from 'express'
import {config} from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url';

config();

const __filename=fileURLToPath(import.meta.url)
 const __dirname=path.dirname(__filename)

const app = express()
const port = process.env.PORT ||4000;

app.use(express.static(path.join(__dirname,'build')))

app.get('/',(req,res)=>{
    res.send("this is me")
})

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'build','home.html'));
})

app.get('/github',(req,res)=>{
    res.send("this is github page")
})


app.listen(port,()=>{
    console.log(`App is listening on http://localhost:${port}`)
})