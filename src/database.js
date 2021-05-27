import mongoose from 'mongoose';

mongoose
	.connect('mongodb://localhost/getfit2', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
		useCreateIndex: true
	})
	.then((db) => console.log('DB is connected'))
	.catch((err) => console.error(err));