import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import * as tablamultController from './controllers/tablamult.controller'
import * as bolitaController from './controllers/bolita.controller'
import * as mejoresEstudiantes from './controllers/mejores-estudiantes.controller'
import * as almacenDeporte from './controllers/almacen-deporte.controller'

const app = express()

app.set("port", process.env.PORT || 3000)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json());

app.get('/', (req, res) => {
    res.json('welcome to the ACME API')
})

app.post('/tallerPDS/tablamult', tablamultController.mult)
app.post('/tallerPDS/bolita', bolitaController.verify)
app.post('/tallerPDS/mejores-estudiantes', mejoresEstudiantes.filtrar5)
app.post('/tallerPDS/almacen-deporte', almacenDeporte.calcularTotal)


export default app