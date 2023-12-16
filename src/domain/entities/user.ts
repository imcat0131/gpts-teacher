// src/domain/entities/user.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from "../../infrastructure/database/config";

export class User extends Model {
    public id!: string; // IDは非nullを保証
    public name!: string;
    // 他の属性をここに追加
}

User.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    // 他の属性の定義
}, {
    sequelize,
    modelName: 'User',
});
