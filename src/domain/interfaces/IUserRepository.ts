// src/domain/interfaces/IUserRepository.ts
import { User } from '../entities/user';

export interface IUserRepository {
    findById(id: string): Promise<User | null>;
}
