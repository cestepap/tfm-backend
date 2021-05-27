import Ejercicio from '../models/Ejercicio';

export const getEjercicios = async (req, res) => {
	const ejercicios = await Ejercicio.find();
	res.json(ejercicios);
};

export const getEjercicioById = async (req, res) => {
    const {ejercicioId} = req.params;
	const ejercicio = await Ejercicio.findById(ejercicioId);
	res.json(ejercicio);
};

export const getEjercicioByGrupoMuscular = async (req, res) => {
    const {grupoMuscular} = req.params;
	const ejercicios = await Ejercicio.find( {"grupoMuscular": grupoMuscular})
	res.json(ejercicios);
};

export const createEjercicio = async (req, res) => {
	const { nombre, descripcion, grupoMuscular, imagen } = req.body;
	const newEjercicio = new Ejercicio({
		nombre,
		descripcion,
		grupoMuscular,
		imagen
	});
	const ejercicioSaved = await newEjercicio.save();

	//codigos de estado. estado 201 nuevo recurso se ha creado
	res.status(201).json(ejercicioSaved);
};

export const deleteEjercicioById = async (req, res) => {
	const { ejercicioId } = req.params;
	const deletedEjercicio = await Ejercicio.findByIdAndDelete(ejercicioId);
	console.log(deletedEjercicio);
	res.status(204).json(deletedEjercicio);
};

export const updateEjercicioById = async (req, res) => {
	// el new: true es para que el findByIdAndUpdate devuelva el objeto con los datos ya actualizados
	const updatedEjercicio = await Ejercicio.findByIdAndUpdate(
		req.params.ejercicioId,
		req.body,
		{
			new: true,
		}
	);
	console.log(req.body);
	res.status(200).json(updatedEjercicio);
};
