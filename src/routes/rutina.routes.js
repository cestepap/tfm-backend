import { Router } from 'express';
const router = Router();

import * as rutinaCtrl from '../controllers/rutinas.controller';
import { authJwt, verifySignup } from '../middlewares';

router.get('/', rutinaCtrl.getRutinas);
router.get('/:rutinaId', rutinaCtrl.getRutina);

router.get('/ep/:_idEP', rutinaCtrl.getRutinasByIdEP);

router.get('/user/:_idCliente', rutinaCtrl.getRutinasByIdCliente);


router.post(
	'/',
	[
		
		// [authJwt.verifyToken, authJwt.isAdmin],
		// verifySignup.checkDuplicateUsernameOrEmail,
	],
	rutinaCtrl.createRutina
);


router.delete(
	'/:rutinaId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	rutinaCtrl.deleteRutinaById
);

router.put(
	'/update/:rutinaId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	rutinaCtrl.updateRutinaById
);

export default router;
