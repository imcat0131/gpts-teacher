// src/domain/entities/subject.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from "../../infrastructure/database/config";

export class Subject extends Model {
    public id!: string; // IDは非nullを保証
    public name!: string; // IDは非nullを保証
    public docment!: string;
    // 他の属性をここに追加
}

Subject.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    docment: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'Subject',
});
