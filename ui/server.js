const express = require('express');
const CustomerController = require('./controllers/CustomerController');
const StoreController = require('./controllers/StoreController');

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', express.static(__dirname + "/client/build"));
app.use('/customer', CustomerController);
app.use('/store', StoreController);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("App is listening on port 3000");
});