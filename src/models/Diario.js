import { Schema, model } from 'mongoose';

const diarioSchema = new Schema(
	{
		idCliente: {
			// para referenciar con el modelo User
			ref: 'User',
			type: Schema.Types.ObjectId,
		},
		descripcion: {
			type: String,
		},
		notasDiario: [
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

export default model('Diario', diarioSchema);
