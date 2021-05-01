const express = require('express');
const router = express.Router();
const peopleService = require('./peopleService');


router.get('/', async function (req, res, next) {
  try {
    results = await peopleService.getPeoples();
    let peoples = ''
    results.forEach(people => {
      peoples += `<li>${people.name}</li>`
    });
    res.send(`<h1>Full Cycle</h1><ul>${peoples}</ul>`);
  } catch (err) {
    console.error(`Error while getting peoples`, err.message);
    next(err);
  }
});

module.exports = router;