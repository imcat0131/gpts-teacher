// src/domain/interfaces/IGetUser.ts
import { Subject } from '../entities/subject';

export interface IGetSubject {
    execute(id: string): Promise<Subject | null>;
}
