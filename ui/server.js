const express = require('express');
const CustomerController = require('./controllers/CustomerController');
const StoreController = require('./controllers/StoreController');

const app = express();

app.use('/', express.static(__dirname + "/client/build"));
app.use('/api/customer', CustomerController);
app.use('/api/store', StoreController);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("App is listening on port 3000");
});