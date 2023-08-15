
const express = require('express');
const router = express.Router();

const magicResponses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

router.get('/:phrase', (req, res) => {
  const phrase = decodeURIComponent(req.params.phrase);
  const randomResponse =
    magicResponses[Math.floor(Math.random() * magicResponses.length)];

  res.send(`<h1>${phrase}</h1><h1>${randomResponse}</h1>`);
});

module.exports = router;


// server.get("/magic/:question", (req, res)=>{
//     const question = req.params.question
//     const ballResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
//     const randomBallResponse = ballResponse[Math.floor(Math.random()*ballResponse.length)];
//     console.log(question, randomBallResponse);
//     res.json({message: `The answer to '${question}?' is: ${randomBallResponse}.`
//     })
// })

