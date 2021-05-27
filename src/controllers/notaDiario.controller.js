import NotaDiario from '../models/NotaDiario';

export const getDiario = async (req, res) => {
	const notasDiario = await NotaDiario.find();
	res.json(notasDiario);
};

export const getNotaDiarioById = async (req, res) => {
    const {notaDiarioId} = req.params;
	const notaDiario = await NotaDiario.findById(notaDiarioId);
	res.json(notaDiario);
};

export const getNotasDiarioByDiarioId = async (req, res) => {
    const {diarioId} = req.params;
	const notasDiario = await NotaDiario.find( {"idDiario": diarioId})
	res.json(notasDiario);
};

export const createNotaDiario = async (req, res) => {
	const { idDiario, fecha, observaciones } = req.body;
	const newNotaDiario = new NotaDiario({
		idDiario, fecha, observaciones
	});
	const notaDiarioSaved = await newNotaDiario.save();

	//codigos de estado. estado 201 nuevo recurso se ha creado
	res.status(201).json(notaDiarioSaved);
};

export const deleteNotaDiarioById = async (req, res) => {
	const { notaDiarioId } = req.params;
	const deletedNotaDiario = await NotaDiario.findByIdAndDelete(notaDiarioId);
	console.log(deletedNotaDiario);
	res.status(204).json(deletedNotaDiario);
};

export const updateNotaDiarioById = async (req, res) => {
	// el new: true es para que el findByIdAndUpdate devuelva el objeto con los datos ya actualizados
	const updatedNotaDiario = await NotaDiario.findByIdAndUpdate(
		req.params.notaDiarioId,
		req.body,
		{
			new: true,
		}
	);
	console.log(req.body);
	res.status(200).json(updatedNotaDiario);
};
