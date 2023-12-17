// src/infrastructure/database/userRepositoryImpl.ts
import { injectable } from 'inversify';
import { ISubjectRepository } from '../../domain/interfaces/ISubjectRepository';
import { Subject } from '../../domain/entities/subject';

@injectable()
export class SubjectRepositoryImpl implements ISubjectRepository {
    async findById(id: string): Promise<Subject | null> {
        const user = await Subject.findByPk(id);
        return user;
    }
}
