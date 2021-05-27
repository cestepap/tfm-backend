import multer from 'multer';
import {v4 as uuid} from 'uuid';
import path from 'path';

//uuid : genera un string aleatorio
//

// donde se colocan las imágenes y para cambiarle el nombre
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname));
    } 
})

export default multer({storage});