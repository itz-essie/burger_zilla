const express = require('express');

const router = express.Router();

const burgers = require('../models/burgers.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
    burger.all((data) => {
      const hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });

  router.post('/api/burgers', (req, res) => {
    burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });



  






// Import the model (burgers.js) to use its database functions.
module.exports = router;