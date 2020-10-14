import express from 'express'
import './database/connection'
import path from 'path'
import cors from 'cors'

import 'express-async-errors'

import routes from  './routes'
import errorHandler from './errors/handler'

const app = express();
app.use(cors())
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(3333);

// Rota = conjunto
// Recurso = usuario

// Métodos = GET, POST, PUT e DELETE
// Parametros

// GET = Buscar uma informação (lista, item)

// POST = Criando uma informação

// PUT = Editando uma informação

// DELETE = deletando uma informação

// Query Params: http://localhost:3333/users?search=eugenio&page=2
//    Serve pra busca, filtro, paginação, utilizado em contexto de parametros mais opcionais

// Route Params: http://localhost:3333/users/1
//    Identificar um recurso
//    Essa rota serve pra identificar o usuario com id 1 

// Body: http://localhost:3333/users/1
//    Serve para enviar dados que nao cabem nos outros parametros, que sao especificos vindo de formularios
