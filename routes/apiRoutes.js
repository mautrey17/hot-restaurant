const express = require('express')

const PORT = process.env.PORT || 3000;

const tableD = require('../data/tableData');
const waitingD = require('../data/waitinglistData');


const routes = expressApp => {
    expressApp.get('/api/tables', (req, res) => res.json(tableD))
    expressApp.get('/api/waitingList', (req, res) => res.json(waitingD))
}

module.exports = routes

//routes
// module.exports = expressApp => {
//     expressApp.get('/api/tables', (req, res) => res.json(tableD))
//     expressApp.get('/api/waitingList', (req, res) => res.json(waitingD))
// }
