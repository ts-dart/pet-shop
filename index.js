const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => res.status(200).send('API rodando'));

app.get('/pets-handler/read-all', readAll);
app.get('/pets-handler/read/:id', read); 
app.post('/pets-handler/create', create);
app.put('/pets-handler/update/:id', update); 
app.delete('/pets-handler/delete/:id', del); 

app.use(errorHandler);

const PORT = 3001;
app.listen(PORT, () => console.log('online na porta: ', PORT));




//services
const { Pets } = require('./models/index');


async function readAll(_req, res) {
  const response = await Pets.findAll();
  res.status(200).send(response);
}

async function read(req, res) {
  const response = await Pets.findOne({ where: { id: req.params.id } });
  res.status(200).json(response);
}

async function create(req, res) {
  const { nome, idade, eGatoOuCachorro, raca, nomeDoDono, telefoneDeContato } = req.body;
  const response = await Pets.create({ nome, idade, eGatoOuCachorro, raca, nomeDoDono, telefoneDeContato });
  res.status(201).json({message: 'Pet registrado com sucesso', response: response, registred: true});
}

async function update(req, res) {
  const { nome, idade, eGatoOuCachorro, raca, nomeDoDono, telefoneDeContato } = req.body;
  const response = await Pets.update(
    { nome, idade, eGatoOuCachorro, raca, nomeDoDono, telefoneDeContato },
    { where: { id: req.params.id } }
  );
  res.status(201).json({message: 'Registro de pet atualizado com sucesso', response: response, registred: true});
}

async function del(req, res) {
  const response = await Pets.destroy({ where: { id: req.params.id } });
  res.status(201).json({message: 'Registro de pet deletado com sucesso', response: response});
}



//middlewares
function errorHandler(err, _req, res, _next) {
  if (err.isJoi) {
    return res.status(422).json({ error: { message: err.details[0].message } });
  }

  if (err.statusCode) {
    return res.status(err.statusCode).json({
      error: { message: err.message },
    });
  }
  
  return res.status(500).json({ error: { message: `Internal server error: ${err.message}` }, registred: false });
};
