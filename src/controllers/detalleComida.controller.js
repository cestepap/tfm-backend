import DetalleComida from '../models/DetalleComida';

export const getDetallesComida = async (req, res) => {
	const detallesComida = await DetalleComida.find();
	res.json(detallesComida);
};

export const getDetalleComidaById = async (req, res) => {
	const { detalleComidaId } = req.params;
	const detalleComida = await DetalleComida.findById(
		detalleComidaId
	).populate('idAlimento');
	res.json(detalleComida);
};

export const getDetallesComidaByComidaId = async (req, res) => {
	const { comidaId } = req.params;
	const detallesComida = await DetalleComida.find({
		idComida: comidaId,
	}).populate('idAlimento');
	res.json(detallesComida);
};

export const createDetallesComida = async (req, res) => {
	const {
		idComida,
		idAlimento,
		cantidad,
		proteinasDetalleComida,
		chsDetalleComida,
		grasasDetalleComida,
		kcalDetalleComida,
		observaciones,
	} = req.body;
	const newDetalleComida = new DetalleComida({
		idComida,
		idAlimento,
		cantidad,
		proteinasDetalleComida,
		chsDetalleComida,
		grasasDetalleComida,
		kcalDetalleComida,
		observaciones,
	});
	const detalleComidaSaved = await newDetalleComida.save();

	res.status(201).json(detalleComidaSaved);
};

export const deleteDetalleComidaById = async (req, res) => {
	const { detalleComidaId } = req.params;
	const deletedDetalleComida = await DetalleComida.findByIdAndDelete(
		detalleComidaId
	);
	res.status(204).json(deletedDetalleComida);
};

export const updateDetalleComidaById = async (req, res) => {
	const updatedDetalleComida = await DetalleComida.findByIdAndUpdate(
		req.params.detalleComidaId,
		req.body,
		{
			new: true,
		}
	);
	console.log(req.body);
	res.status(200).json(updatedDetalleComida);
};
