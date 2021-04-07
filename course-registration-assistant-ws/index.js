const express = require('express');
const routes = require ('./routes/index');
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Whenever a service is called, 
// express will create a particular database connection for that request
const mongoose = require('mongoose');
const connection = mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Database Connection Established!')
});

mongoose.connection.on('error', (err) => {
    console.error(err)
});

const corsOptions = {
  origin: '*'
}

const app = express();
const port = process.env.PORT || 8080;
app.use(cors(corsOptions));
app.use(express.json());

app.use(routes);

app.get("/", (req, res) => {
  res.send("The course registration assistant api is running");
});

app.listen(port, () => {
  console.log(`express is listening on http://localhost:${port}`);
})
