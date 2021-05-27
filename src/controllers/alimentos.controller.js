import Alimento from '../models/Alimento';

export const getAlimentos = async (req, res) => {
	const alimentos = await Alimento.find();
	res.json(alimentos);
};

export const getAlimentoById = async (req, res) => {
    const {alimentoId} = req.params;
	const alimento = await Alimento.findById(alimentoId);
	res.json(alimento);
};

export const getAlimentoByGrupoAlimento = async (req, res) => {
    const {grupoAlimento} = req.params;
	const alimentos = await Alimento.find( {"grupoAlimento": grupoAlimento})
	res.json(alimentos);
};

export const createAlimento = async (req, res) => {
	const { nombre, descripcion, grupoAlimento, proteinas, carbohidratos, grasas, kcal, imagen } = req.body;
	const newAlimento = new Alimento({
		nombre,
		descripcion,
		grupoAlimento,
        proteinas,
        carbohidratos,
        grasas,
        kcal,
		imagen
	});
	const alimentoSaved = await newAlimento.save();

	//codigos de estado. estado 201 nuevo recurso se ha creado
	res.status(201).json(alimentoSaved);
};

export const deleteAlimentoById = async (req, res) => {
	const { alimentoId } = req.params;
	const deletedAlimento = await Alimento.findByIdAndDelete(alimentoId);
	console.log(deletedAlimento);
	res.status(204).json(deletedAlimento);
};

export const updateAlimentoById = async (req, res) => {
	// el new: true es para que el findByIdAndUpdate devuelva el objeto con los datos ya actualizados
	const updatedAlimento = await Alimento.findByIdAndUpdate(
		req.params.alimentoId,
		req.body,
		{
			new: true,
		}
	);
	console.log(req.body);
	res.status(200).json(updatedAlimento);
};
