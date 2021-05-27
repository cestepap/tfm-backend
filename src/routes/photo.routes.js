import { Router } from 'express';
const router = Router();

import multer from '../libs/multer';

import * as photoCtrl from '../controllers/photo.controller';

router.get('/', photoCtrl.getPhotos);

router.post('/', multer.single('image'), photoCtrl.createPhoto);

router.get('/:id', photoCtrl.getPhoto);

router.delete('/:id', photoCtrl.deletePhoto);

router.put('/:id', photoCtrl.updatePhoto);
 
export default router;
