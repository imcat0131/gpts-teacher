// src/domain/interfaces/IUserRepository.ts
import { Subject } from '../entities/subject';

export interface ISubjectRepository {
    findById(id: string): Promise<Subject | null>;
}
