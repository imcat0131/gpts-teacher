import { Router } from 'express';
import { SubjectController } from '../controllers/subjectController';
import logger from '../../infrastructure/logging/logger';

export function getSubjectRoutes(subjectController: SubjectController): Router {
    const router = Router();
    logger.info('SubjectController');
    router.get('/Subject/:id', (req, res) => subjectController.getSubjectById(req, res));
    return router;
}
