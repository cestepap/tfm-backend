import Comida from '../models/Comida';

export const getComidas = async (req, res) => {
	const comidas = await Comida.find();
	res.json(comidas);
};

export const getComidaById = async (req, res) => {
	const { comidaId } = req.params;
	const comida = await Comida.findById(comidaId);
	res.json(comida);
};

export const getComidasByDiaSemanaDietaId = async (req, res) => {
	const { diaSemanaDietaId } = req.params;
	const comidas = await Comida.find({
		idDiaSemanaDieta: diaSemanaDietaId,
	});
	res.json(comidas);
};

export const createComida = async (req, res) => {
	const {
		idDiaSemanaDieta,
		nombre,
		hora,
		proteinasComida,
		chsComida,
		grasasComida,
		kcalComida,
		detalleComida,
	} = req.body;
	const newComida = new Comida({
		idDiaSemanaDieta,
		nombre,
		hora,
		proteinasComida,
		chsComida,
		grasasComida,
		kcalComida,
		detalleComida,
	});
	const comidaSaved = await newComida.save();
	res.status(201).json(comidaSaved);
};

export const deleteComidaById = async (req, res) => {
	const { comidaId } = req.params;
	const deletedComida = await Comida.findByIdAndDelete(comidaId);
	res.status(204).json(deletedComida);
};

export const updateComidaById = async (req, res) => {
	const updatedComida = await Comida.findByIdAndUpdate(
		req.params.comidaId,
		req.body,
		{
			new: true,
		}
	);
	res.status(200).json(updatedComida);
};
