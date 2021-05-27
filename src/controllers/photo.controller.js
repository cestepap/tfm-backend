import Photo from '../models/Photo';
import path from 'path';

// modulo que permite usar fs acceso a ficheros y async await
import fs from 'fs-extra';

export const getPhotos = async (req, res) => {
    const photos = await Photo.find();
	return await res.json(photos);
};

export const createPhoto = async (req, res) => {
	const { title, description } = req.body;
	// console.log(req.file);
	const newPhoto = {
	    title: title,
	    description: description,
	    imagePath: req.file.path
	}

	const photo = new Photo(newPhoto);
	console.log(photo)
    await photo.save();

	return await res.json({
		message: 'Photo succesfully saved',  
        photo: photo
	});
};

export const getPhoto = async (req, res) => {
    const { id } = req.params;
    const photo = await Photo.findById(id);
	return await res.json(photo);
};

export const deletePhoto = async (req, res) => {
    const { id } = req.params;
    // para borrar la foto de mongodb
    const photo = await Photo.findByIdAndDelete(id);
    // para borrar la foto del server
    if (photo) {
        await fs.unlink(path.resolve(photo.imagePath));
    }
	return await res.json({message: 'photo deleted', photo});
};

export const updatePhoto = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedPhoto = await Photo.findByIdAndUpdate(id, {title, description},{
        new: true
    });
	return res.json({message: 'photo updated', updatedPhoto});
};