
const express = require('express');
const router = express.Router();

router.get('/:name', (req, res) => {
  const name = req.params.name || 'User';
  res.send(`<h1>Wow! Hello there, ${name}!</h1>`);
});

module.exports = router;