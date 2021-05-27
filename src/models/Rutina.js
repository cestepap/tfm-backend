import { Schema, model } from 'mongoose';

const rutinaSchema = new Schema(
	{
		idCliente: {
			// para referenciar con el modelo User
			ref: 'User',
			type: Schema.Types.ObjectId,
		},
		idProfesional: {
			// para referenciar con el modelo User
			ref: 'User',
			type: Schema.Types.ObjectId,
		},
		titulo: {
			type: String,
			required: true,
		},
		descripcion: {
			type: String,
		},
		fechaInicio: {
			type: String,
			required: true,
		},
		estado: {
			type: String,
			required: true,
		},
		diaSemanaRutina: [
			{
                type: String
			},
		],
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default model('Rutina', rutinaSchema);
