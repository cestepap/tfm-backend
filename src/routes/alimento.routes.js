import { Router } from 'express';
const router = Router();

import * as alimentoCtrl from '../controllers/alimentos.controller';
import { authJwt, verifySignup } from '../middlewares';

router.get('/', alimentoCtrl.getAlimentos);
router.get('/:alimentoId', alimentoCtrl.getAlimentoById);
router.get('/grupo-alimento/:grupoAlimento', alimentoCtrl.getAlimentoByGrupoAlimento);

router.post(
	'/',
	[
		// [authJwt.verifyToken, authJwt.isAdmin],
		// verifySignup.checkDuplicateUsernameOrEmail,
	],
	alimentoCtrl.createAlimento
);
router.delete(
	'/:alimentoId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	alimentoCtrl.deleteAlimentoById
);

router.put(
	'/:alimentoId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	alimentoCtrl.updateAlimentoById
);

export default router;
