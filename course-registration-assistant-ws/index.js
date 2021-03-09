const express = require('express');
const { userRoute }  = require ('./routes/index.js');
const mongoose = require('mongoose');
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const corsOptions = {
    origin: '*'
}

const app = express();
app.use(cors(corsOptions));

const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/users', userRoute);

app.get("/", (req, res) => {
  res.send("The course registration assistant api is running");
});

app.listen(port, () => {
  console.log(`express is listening on http://localhost:${port}`);
})
