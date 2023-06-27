const express = require('express');
const cors = require('cors');
//const petsRoute = require('./routes/petsRoute');
//const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => res.status(200).send('API rodando'));
//app.use('/pets-handler', petsRoute);
//app.use(errorHandler);

const PORT = 3001;
app.listen(PORT, () => console.log('online na porta: ', PORT));
