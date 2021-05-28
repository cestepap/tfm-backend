// configurar express

import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';

import path from 'path';

const cors = require('cors');

import photoRoutes from './routes/photo.routes';

import { createRoles } from './libs/initialSetup';

// import productRoutes from './routes/products.routes';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import ejerciciosRoutes from './routes/ejercicio.routes';
import alimentoRoutes from './routes/alimento.routes';

import rutinaRoutes from './routes/rutina.routes';
import diaSemanaRutinaRoutes from './routes/diaSemanaRutina.routes';
import detalleEjercicioRoutes from './routes/detalleEjercicio.routes';

import dietaRoutes from './routes/dieta.routes';
import diaSemanaDietaRoutes from './routes/diaSemanaDieta.routes';
import comidaRoutes from './routes/comida.routes';
import detalleComidaRoutes from './routes/detalleComida.routes';

import diarioRoutes from './routes/diario.routes';
import notaDiarioRoutes from './routes/notaDiario.routes';

const app = express();
// createRoles();

app.set('pkg', pkg);
// app.use(cors({origin: "http://localhost:4200"}));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
	// res.json({
	// 	author: app.get('pkg').author,
	// });
	res.send('hello');
});

// app.use('/api/products', productRoutes);

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/ejercicios', ejerciciosRoutes);
app.use('/api/alimentos', alimentoRoutes);

app.use('/api/rutinas', rutinaRoutes);
app.use('/api/diasSemanaRutina', diaSemanaRutinaRoutes);
app.use('/api/detallesEjercicios', detalleEjercicioRoutes);

app.use('/api/dietas', dietaRoutes);
app.use('/api/diasSemanaDieta', diaSemanaDietaRoutes);
app.use('/api/comidas', comidaRoutes);
app.use('/api/detallesComidas', detalleComidaRoutes);

app.use('/api/diarios', diarioRoutes);
app.use('/api/notasDiario', notaDiarioRoutes);

app.use('/api/photos', photoRoutes);

app.use('/uploads', express.static(path.resolve('uploads')));

export default app;
