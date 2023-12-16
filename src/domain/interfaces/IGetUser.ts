// src/domain/interfaces/IGetUser.ts
import { User } from '../entities/user';

export interface IGetUser {
    execute(id: string): Promise<User | null>;
}
