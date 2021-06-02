import DiaSemanaDieta from '../models/DiaSemanaDieta';

export const getDiasSemanaDieta = async (req, res) => {
	const diaSemanasDieta = await DiaSemanaDieta.find();
	res.json(diaSemanasDieta);
};

export const getDiaSemanaDietaById = async (req, res) => {
	const { diaSemanaDietaId } = req.params;
	const diaSemanaDieta = await DiaSemanaDieta.findById(diaSemanaDietaId);
	res.json(diaSemanaDieta);
};

export const getDiasSemanaDietaByDietaId = async (req, res) => {
	const { dietaId } = req.params;
	const diasSemanaDieta = await DiaSemanaDieta.find({ idDieta: dietaId });
	res.json(diasSemanaDieta);
};

export const createDiaSemanaDieta = async (req, res) => {
	const {
		idDieta,
		nombre,
		descripcion,
		proteinasTotalesDia,
		chsTotalesDia,
		grasasTotalesDia,
		kcalTotalesDia,
		comida,
	} = req.body;
	const newDiaSemanaDieta = new DiaSemanaDieta({
		idDieta,
		nombre,
		descripcion,
		proteinasTotalesDia,
		chsTotalesDia,
		grasasTotalesDia,
		kcalTotalesDia,
		comida,
	});
	// const diaSemanaDietaSaved = await newDiaSemanaDieta.save();

	// if (!diaSemanaDietaSaved)
	// 	return res
	// 		.status(400)
	// 		.json({ message: 'Error durante el proceso' });
	// else {
	// 	res.status(204).json(diaSemanaDietaSaved);
	// }

	res.status(204).json(req.body);
};

export const deleteDiaSemanaDietaById = async (req, res) => {
	const { diaSemanaDietaId } = req.params;
	const deletedDiaSemanaDieta = await DiaSemanaDieta.findByIdAndDelete(
		diaSemanaDietaId
	);
	res.status(204).json(deletedDiaSemanaDieta);
};

export const updateDiaSemanaDietaById = async (req, res) => {
	const updatedDiaSemanaDieta = await DiaSemanaDieta.findByIdAndUpdate(
		req.params.diaSemanaDietaId,
		req.body,
		{
			new: true,
		}
	);
	res.status(200).json(updatedDiaSemanaDieta);
};
