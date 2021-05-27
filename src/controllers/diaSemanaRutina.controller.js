import DiaSemanaRutina from '../models/DiaSemanaRutina';

export const getDiasSemanaRutina = async (req, res) => {
	const diasSemanasRutinas = await DiaSemanaRutina.find();
	res.json(diasSemanasRutinas);
};

export const getDiaSemanaRutinaById = async (req, res) => {
    const {diaSemanaRutinaId} = req.params;
	const diaSemanaRutina = await DiaSemanaRutina.findById(diaSemanaRutinaId);
	res.json(diaSemanaRutina);
};

export const getDiasSemanaRutinaByRutinaId = async (req, res) => {
    const {rutinaId} = req.params;
	const diasSemanaRutina = await DiaSemanaRutina.find( {"idRutina": rutinaId})
	res.json(diasSemanaRutina);
};

export const createDiaSemanaRutina = async (req, res) => {
	const {idRutina, nombre, descripcion, detalleEjercicios } = req.body;
    const newDiaSemanaRutina = new DiaSemanaRutina ( {idRutina, nombre, descripcion, detalleEjercicios});
    const diaSemanaRutinaSaved = await newDiaSemanaRutina.save();
    res.status(201).json(diaSemanaRutinaSaved);

};

export const deleteDiaSemanaRutinaById = async (req, res) => {
    const {diaSemanaRutinaId} = req.params;
    const deletedDiaSemanaRutina = await DiaSemanaRutina.findByIdAndDelete(diaSemanaRutinaId);
    res.status(204).json(deletedDiaSemanaRutina);
};

export const updateDiaSemanaRutinaById = async (req, res) => {
    const updatedDiaSemanaRutina = await DiaSemanaRutina.findByIdAndUpdate(req.params.diaSemanaRutinaId, req.body, {
        new: true
    })
    res.status(200).json(updatedDiaSemanaRutina);
};