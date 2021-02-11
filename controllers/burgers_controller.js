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


  






// Import the model (burgers.js) to use its database functions.
module.exports = router;