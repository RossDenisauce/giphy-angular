const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    let queryText = `INSERT INTO gifs (url) VALUES ($1)`
    console.log(req.body);
    pool.query(queryText, [req.body.image_url])
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        res.sendStatus(500);
    })
})

router.get('/', (req, res) =>{

});

module.exports = router;