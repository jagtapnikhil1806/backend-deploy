import express from 'express'
require('dotenv').config()

const app = express()
const port =process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("this is me")
})

app.get("/github",(req,res)=>{
    res.send("this is github page")
})


app.listen(port,()=>{
    console.log(`App is listening on http://localhost:${port}`)
})