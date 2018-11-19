const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const pokemon = require('./routes/api/pokemon')
const cors = require('cors');
const app = express();

//Bodyparser middleware
app.use(bodyParser.json());
app.use(cors());

app.use('/api/pokemon', pokemon);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));