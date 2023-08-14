const express = require("express")

const server = express()
const PORT = process.env.PORT || 3000

server.get("/", (req, res)=>{
    res.status(200).json({message: "API UP!"})
})

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
})