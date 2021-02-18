const express = require('express')

const app = express();
const PORT = process.env.PORT || 3000;

const tableD = require('../data/tableData');
const waitingD = require('../data/waitinglistData')

//routes

//table data
app.get('/api/tableData', (req, res) => res.json(tableD));

app.get('/api/waitinglistData', (req, res) => res.json(waitingD));