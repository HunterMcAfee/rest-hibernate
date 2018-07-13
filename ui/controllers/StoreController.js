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

router.post('/:id/addCustomer', (req, res) => {
    console.log(req.body);
    axios.post(`http://localhost:8080/store/${req.params.id}/addCustomer`, req.body)
        .then((apiResponse) => {
            res.json("Customer added to store.");
        })
        .catch((error) => {
            console.log(`Error adding customer to store: ${error}`);
        })
});

// router.get("/lastname/{lastName}", (req, res) => {

// });

// router.put("/update", (req, res) => {

// });

// router.delete("/{id}", (req, res) => {

// });

module.exports = router;