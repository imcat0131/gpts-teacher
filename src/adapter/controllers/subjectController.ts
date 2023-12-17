// src/adapter/controllers/userController.ts
import { injectable, inject } from 'inversify';
import { Request, Response } from 'express';
import { IGetSubject } from '../../domain/interfaces/IGetSubject';
import logger from '../../infrastructure/logging/logger';

@injectable()
export class SubjectController {
    constructor(@inject('IGetSubject') private getSubject: IGetSubject) {}

    async getSubjectById(req: Request, res: Response) {
        logger.info("params id" + req.params.id)
        const subject = await this.getSubject.execute(req.params.id);
        if (subject) {
            res.json(subject);
        } else {
            res.status(404).send('User not found');
        }

        return;
    }
}
