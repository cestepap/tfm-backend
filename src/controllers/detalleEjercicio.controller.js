import DetalleEjercicio from '../models/DetalleEjercicio';

export const getDetallesEjercicios = async (req, res) => {
	const detallesEjercicios = await DetalleEjercicio.find();
	res.json(detallesEjercicios);
};

// export const getDetalleEjercicioByIdandPopulate = async (req, res) => {
//     const {detalleEjercicioId} = req.params;
// 	const detalleEjercicio = await DetalleEjercicio.findById(detalleEjercicioId).populate("idEjercicio");
// 	res.json(detalleEjercicio);
// };

export const getDetalleEjercicioById = async (req, res) => {
    const {detalleEjercicioId} = req.params;
	const detalleEjercicio = await DetalleEjercicio.findById(detalleEjercicioId).populate("idEjercicio");
	res.json(detalleEjercicio);
};

export const getDetallesEjerciciosByDiaSemanaRutinaId = async (req, res) => {
    const {diaSemanaRutinaId} = req.params;
	const detallesEjercicios = await DetalleEjercicio.find( {"idDiaSemanaRutina": diaSemanaRutinaId}).populate("idEjercicio");
	res.json(detallesEjercicios);
};

export const createDetalleEjercicio = async (req, res) => {

	const {idDiaSemanaRutina, idEjercicio, series, repeticiones, observaciones } = req.body;
    const newDetalleEjercicio = new DetalleEjercicio ( {idDiaSemanaRutina, idEjercicio, series, repeticiones, observaciones});
    const detalleEjercicioSaved = await newDetalleEjercicio.save();

    //codigos de estado. estado 201 nuevo recurso se ha creado
    res.status(201).json(detalleEjercicioSaved);

};

export const deleteDetalleEjercicioById = async (req, res) => {
    const {detalleEjercicioId} = req.params;
    const deletedDetalleEjercicio = await DetalleEjercicio.findByIdAndDelete(detalleEjercicioId);
    res.status(204).json(deletedDetalleEjercicio);
};

export const updateDetalleEjercicioById = async (req, res) => {
    const updatedDetalleEjercicio = await DetalleEjercicio.findByIdAndUpdate(req.params.detalleEjercicioId, req.body, {
        new: true
    })
	console.log(req.body);
    res.status(200).json(updatedDetalleEjercicio);
};