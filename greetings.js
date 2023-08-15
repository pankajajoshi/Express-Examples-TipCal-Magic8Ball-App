

const express = require('express');
const router = express.Router();

router.get('/:name', (req, res) => {
  const name = req.params.name || 'User';
  res.send(`Wow! Hello there, ${name}!`);
});

module.exports = router;