import express from 'express'
import cors from "cors"
import routes from './routes.js'
import { sequelize } from './databases/conecta.js'
import { Ano } from './models/Anos.js';
import { Carro } from './models/Carros.js';
import { Proposta } from './models/Propostas.js';
import { Cliente } from './models/Clientes.js';

const app = express()
const port = 3004

app.use(express.json())
app.use(cors())
app.use(routes);

async function conecta_db() {
  try {
    await sequelize.authenticate();
    await Ano.sync({})
    await Carro.sync({})
    await Cliente.sync({})
    await Proposta.sync({})
   

    console.log('A conexão foi estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro na conexão com o banco: ', error);
  }
}
conecta_db()

app.get('/', (req, res) => {
  res.send('API Avaliação de Cadastro e Venda de Carros')
})

app.listen(port, () => {
  console.log(`Servidor Rodando na Porta: ${port}`)
})