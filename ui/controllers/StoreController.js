const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/all', (req, res) => {
    axios.get('http://localhost:8080/store/all')
        .then((stores) => {
            res.json(stores.data);
        })
        .catch((error) => {
            console.log(`Error retrieving customers from api: ${error}`);
        })
});

// router.get('/{id}', (req, res) => {

// });

// router.get("/lastname/{lastName}", (req, res) => {

// });

// router.put("/update", (req, res) => {

// });

// router.delete("/{id}", (req, res) => {

// });

module.exports = router;