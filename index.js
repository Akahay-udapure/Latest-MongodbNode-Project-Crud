const express = require('express');
const bodyParser = require('body-parser');
const { connection } = require('./connection');
const userRoutes = require('./routes/users');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connection();


app.use('/api/user', userRoutes);

app.listen(port, () => console.log(`Server listening on port ${port}`));
