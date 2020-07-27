const express = require('express');
const bodyParser = require('body-parser')

const userRoutes = require('./routes/userRoutes')

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))

userRoutes(app)

app.get('/', (req, res) => res.send('Olá mundo usando express!'))

app.listen(port, () => console.log('API rodando na porta 3000'));