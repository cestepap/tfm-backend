import Diario from '../models/Diario';

export const getDiario = async (req, res) => {
	const diarios = await Diario.find();
	res.json(diarios);
};

export const getDiarioById = async (req, res) => {
	const { diarioId } = req.params;
	const diario = await Diario.findById(diarioId);
	res.json(diario);
};

export const getDiarioByUserId = async (req, res) => {
	const { userId } = req.params;
	const diario = await Diario.find({ idCliente: userId });
	res.json(diario);
};

export const createDiario = async (req, res) => {
	const { idCliente, descripcion, notasDiario } = req.body;
	const newDiario = new Diario({
		idCliente,
		descripcion,
		notasDiario,
	});
	const diarioSaved = await newDiario.save();

	//codigos de estado. estado 201 nuevo recurso se ha creado
	res.status(201).json(diarioSaved);
};

export const deleteDiarioById = async (req, res) => {
	const { diarioId } = req.params;
	const deletedDiario = await Diario.findByIdAndDelete(diarioId);
	console.log(deletedDiario);
	res.status(204).json(deletedDiario);
};

export const updateDiarioById = async (req, res) => {
	// el new: true es para que el findByIdAndUpdate devuelva el objeto con los datos ya actualizados
	const updatedDiario = await Diario.findByIdAndUpdate(
		req.params.diarioId,
		req.body,
		{
			new: true,
		}
	);
	console.log(req.body);
	res.status(200).json(updatedDiario);
};
