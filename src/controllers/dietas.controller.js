import Dieta from '../models/Dieta';

export const getDietas = async (req, res) => {
	const dietas = await Dieta.find()
		.populate('idCliente')
		.populate('idProfesional');
	// const rutinas = await Rutina.find();
	res.json(dietas);
};

export const getDieta = async (req, res) => {
	const { dietaId } = req.params;
	const dieta = await Dieta.findById(dietaId)
		.populate('idCliente')
		.populate('idProfesional');
	res.json(dieta);
};

export const getDietasByIdEP = async (req, res) => {
	const { _idEP } = req.params;
	const dietas = await Dieta.find({ idProfesional: _idEP })
		.populate('idCliente')
		.populate('idProfesional');
	res.json(dietas);
};

export const getDietasByIdCliente = async (req, res) => {
	const { _idCliente } = req.params;
	const dietas = await Dieta.find({ idCliente: _idCliente })
		.populate('idCliente')
		.populate('idProfesional');
	res.json(dietas);
};

export const createDieta = async (req, res) => {
	const {
		idCliente,
		idProfesional,
		titulo,
		descripcion,
		fechaInicio,
		estado,
		proteinasTotalesSemana,
		chsTotalesSemana,
		grasasTotalesSemana,
		kcalTotalesSemana,
		diaSemanaDieta,
	} = req.body;
	const newDieta = new Dieta({
		idCliente,
		idProfesional,
		titulo,
		descripcion,
		fechaInicio,
		estado,
		proteinasTotalesSemana,
		chsTotalesSemana,
		grasasTotalesSemana,
		kcalTotalesSemana,
		diaSemanaDieta,
	});
	const dietaSaved = await newDieta.save();
	res.status(201).json(dietaSaved);
};

export const deleteDietaById = async (req, res) => {
	const { dietaId } = req.params;
	const deletedDieta = await Dieta.findByIdAndDelete(dietaId);
	res.status(204).json(deletedDieta);
};

export const updateDietaById = async (req, res) => {
	const updatedDieta = await Dieta.findByIdAndUpdate(
		req.params.dietaId,
		req.body,
		{
			new: true,
		}
	);
	console.log(req.body);
	res.status(200).json(updatedDieta);
};
