require('dotenv').config();
require('express-async-errors');
const Youch = require('youch');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

require('./database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(async (err, req, res, next) => {
  const errors = await new Youch(err, req).toJSON();
  return res.status(500).json(errors);
});

app.listen(3333);
