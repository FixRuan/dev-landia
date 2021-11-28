import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { mapsRoutes } from './maps.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/maps', mapsRoutes);
router.use('/', authenticateRoutes);

export { router };
