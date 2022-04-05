import express from "express";

const app = express()
const PORT = 3002

app.get('/',(req, res)=>{
    res.json({'success':true})
})

app.listen(PORT, ()=>{
    console.log(`Server run on PORT ${PORT}`)
})