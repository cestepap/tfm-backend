import mongoose from 'mongoose';

const db_URI =
	'mongodb+srv://carlos:qOexbzjWbNtPju4x@cluster0.9efsg.mongodb.net/thegymtool?authSource=admin&replicaSet=atlas-vgv8m9-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';


mongoose
	.connect(db_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
		useCreateIndex: true
	})
	.then((db) => console.log('DB is connected'))
	.catch((err) => console.error(err));


	// mongoose
	// .connect('mongodb://localhost/getfit2', {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useFindAndModify: false,
	// 	useCreateIndex: true
	// })
	// .then((db) => console.log('DB is connecteds'))
	// .catch((err) => console.error(err));