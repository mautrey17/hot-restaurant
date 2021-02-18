//dependencies
const express = require('express')
const app = express();
const apiRoutes = require('./routes/apiRoutes')

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//api routes
const tableD = require('./data/tableData');
const waitingD = require('./data/waitinglistData');

app.get('/api/tableData', (req, res) => res.json(tableD))
app.get('/api/waitinglistData', (req, res) => res.json(waitingD))

//have express server start to listen

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));