import { Schema, model } from 'mongoose';

const notaDiarioSchema = new Schema(
	{
		idDiario: {
			// para referenciar con el modelo User
			ref: 'Diario',
			type: Schema.Types.ObjectId,
		},
		fecha: {
			type: String,
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

export default model('NotaDiario', notaDiarioSchema);
