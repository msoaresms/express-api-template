const express = require('express');
const cors = require('cors');
const consign = require('consign');

const app = express();
app.use(cors());
app.use(express.json());

consign({cwd: 'src'}).include('routes').into(app);

module.exports = app;
