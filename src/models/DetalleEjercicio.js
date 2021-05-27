import { Schema, model } from 'mongoose';

const detalleEjercicioSchema = new Schema(
	{
		idDiaSemanaRutina: {
			// para referenciar con el modelo DiaSemanaRutina
			ref: 'DiaSemanaRutina',
			type: Schema.Types.ObjectId,
		},
		idEjercicio: {
			// para referenciar con el modelo Ejercicio
			ref: 'Ejercicio',
			type: Schema.Types.ObjectId,
		},
		series: {
			type: String,
			required: true,
		},
		repeticiones: {
			type: String,
			required: true,
		},
		observaciones: {
			type: String,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default model('DetalleEjercicio', detalleEjercicioSchema);
