// const express = require("express")
// const tip=require("tip.js")
// const greeting =require("/greeting.js")
// const magic =require ("/magic.js")
// const server = express()
// const PORT = process.env.PORT || 3000

// server.get("/", (req, res)=>{
//     res.status(200).json({message: "API UP!"})
// })

// server.listen(PORT, ()=>{
//     console.log(`Server is listening at: ${PORT}`)
// })

const express = require('express');
const app = express();
const port = 3000;

const greetingRouter = require('./greetings');
app.use('/greetings', greetingRouter);

const tipRouter = require('./tip');
app.use('/tip', tipRouter);

const magicRouter = require('./magic');
app.use('/magic', magicRouter);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

        
