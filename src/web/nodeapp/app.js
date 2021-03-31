// ------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// ------------------------------------------------------------

const express = require('express');
const bodyParser = require('body-parser');
require('isomorphic-fetch');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.post('/neworder', bodyParser.json(), (req, res) => {
    const data = req.body.data;
    console.log('data=> ', data);
    const orderId = data.orderId;
    console.log("Got a new order! Order ID: " + orderId);
    res.status(200).send("Got a new order! Order ID: " + orderId);
});

app.get('/order', (req, res) => {
    //const data = req.body.data;
    const serverTime = Date.now();
    const msg = `order api. server time: ${serverTime}`;
    console.log(msg);
    res.status(200).send(msg);
});
app.listen(port, () => console.log(`Node App listening on port ${port}!`));