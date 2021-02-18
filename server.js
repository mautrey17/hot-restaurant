//dependencies
const express = require('express')
const app = express();


//ALTERNATIVES

// const routes = expressApp => {
//     expressApp.get('/api/tables', (req, res) => res.json(tableD))
//     expressApp.get('/api/waitingList', (req, res) => res.json(waitingD))
// }

// routes(app)

// const apiRoutes = require('./routes/apiRoutes')
// apiRoutes(app)
require('./routes/apiRoutes')(app)

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




//api routes
// const tableD = require('./data/tableData');
// const waitingD = require('./data/waitinglistData');

// app.get('/api/tables', (req, res) => res.json(tableD))
// app.get('/api/waitingList', (req, res) => res.json(waitingD))


// app.post('/api/tableData', (req, res) => {
//     const newTable = req.body;
// })



//have express server start to listen

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));