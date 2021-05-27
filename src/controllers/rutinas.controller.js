import Rutina from '../models/Rutina';

export const getRutinas = async (req, res) => {
	const rutinas = await Rutina.find().populate("idCliente").populate("idProfesional");
	// const rutinas = await Rutina.find();
	res.json(rutinas);
};

export const getRutina = async (req, res) => {
	const { rutinaId } = req.params;
	const rutina = await Rutina.findById(rutinaId)
		.populate('idCliente')
		.populate('idProfesional');
	res.json(rutina);
};

export const getRutinasByIdEP = async (req, res) => {
	const { _idEP } = req.params;
	const rutinas = await Rutina.find( {"idProfesional": _idEP})
		.populate('idCliente')
		.populate('idProfesional');
	res.json(rutinas);
};

export const getRutinasByIdCliente = async (req, res) => {
	const { _idCliente } = req.params;
	const rutinas = await Rutina.find( {"idCliente": _idCliente})
		.populate('idCliente')
		.populate('idProfesional');
	res.json(rutinas);
};

export const createRutina = async (req, res) => {
	// res.json('creating rutinas');

	const {
		idCliente,
		idProfesional,
		titulo,
		descripcion,
		fechaInicio,
		estado,
		diaSemanaRutina,
	} = req.body;
	const newRutina = new Rutina({
		idCliente,
		idProfesional,
		titulo,
		descripcion,
		fechaInicio,
		estado,
		diaSemanaRutina,
	});
	const rutinaSaved = await newRutina.save();

	//codigos de estado. estado 201 nuevo recurso se ha creado
	res.status(201).json(rutinaSaved);
};

export const deleteRutinaById = async (req, res) => {
    const {rutinaId} = req.params;
    const deletedRutina = await Rutina.findByIdAndDelete(rutinaId)
    console.log(rutinaId);
    res.status(204).json(deletedRutina)
};

export const updateRutinaById = async (req, res) => {
	// el new: true es para que el findByIdAndUpdate devuelva el objeto con los datos ya actualizados
	const updatedRutina = await Rutina.findByIdAndUpdate(
		req.params.rutinaId,
		req.body,
		{
			new: true,
		}
	);
	console.log(req.body);
	res.status(200).json(updatedRutina);
};
