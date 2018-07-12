const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/all', (req, res) => {
    axios.get(`http://localhost:8080/customer/all`)
        .then((customers) => {
            res.json(customers.data);
        })
        .catch((error) => {
            console.log(`Error retrieving customers: ${error}`);
        });
});

router.get('/lastname/:lastName', (req, res) => {
    axios.get(`http://localhost:8080/customer/lastname/${req.params.lastName}`)
        .then((customers) => {
            res.json(customers.data);
        })
        .catch((error) => {
            console.log(`Error retrieving customer: ${error}`)
        });
});

module.exports = router;