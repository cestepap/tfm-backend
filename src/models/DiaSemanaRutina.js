import { Schema, model } from 'mongoose';

const diaSemanaRutinaSchema = new Schema(
	{
		idRutina: {
			// para referenciar con el modelo Rutina
			ref: 'Rutina',
			type: Schema.Types.ObjectId,
		},
		nombre: {
			type: String,
			required: true,
		},
		descripcion: {
			type: String,
			required: true,
		},
		detalleEjercicios: [
			{
				// para referenciar con el modelo DetalleEjercicio dentro de un array
				// ref: 'DetalleEjercicio',
				// type: Schema.Types.ObjectId,

				type: String,
			},
		],
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default model('DiaSemanaRutina', diaSemanaRutinaSchema);
