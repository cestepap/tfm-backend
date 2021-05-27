import { Router } from 'express';
const router = Router();

import * as detalleComidaCtrl from '../controllers/detalleComida.controller';
import { authJwt, verifySignup } from '../middlewares';

router.get('/', detalleComidaCtrl.getDetallesComida);
router.get('/:detalleComidaId', detalleComidaCtrl.getDetalleComidaById);
router.get('/comida/:comidaId', detalleComidaCtrl.getDetallesComidaByComidaId);

router.post(
	'/',
	[
		
		// [authJwt.verifyToken, authJwt.isAdmin],
		// verifySignup.checkDuplicateUsernameOrEmail,
	],
	detalleComidaCtrl.createDetallesComida
);


router.delete(
	'/:detalleComidaId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	detalleComidaCtrl.deleteDetalleComidaById
);

router.put(
	'/:detalleComidaId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	detalleComidaCtrl.updateDetalleComidaById
);

export default router;
