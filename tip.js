const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { total, tipPercentage } = req.query;

  if (!total || !tipPercentage) {
    res.status(400).send('Please provide both total and tipPercentage parameters.');
    return;
  }

  const billAmount = parseFloat(total);
  const tipPercent = parseFloat(tipPercentage);

  if (isNaN(billAmount) || isNaN(tipPercent)) {
    res.status(400).send('Invalid parameters. Please provide valid numbers for total and tipPercentage.');
    return;
  }

  const tipAmount = (billAmount * tipPercent) / 100;

  res.send(`<h1>Your tip amount: ${tipAmount.toFixed(2)}</h1>`);
});

module.exports = router;


// //Tip Calculator Express Application
// server.get("/tip/:total/:tipPercentage", (req, res)=>{
//     const total = req.params.total
//     const tipPercentage = req.params.tipPercentage / 100
//     const tipTotal = total * tipPercentage
//     res.status(200).json({message: `Please leave a tip of $${tipTotal}`})
// })