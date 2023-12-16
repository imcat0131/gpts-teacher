// src/infrastructure/database/config.ts
import { Sequelize } from 'sequelize';

// 環境変数が存在しない場合のデフォルト値(local values)
const defaultDatabase = 'test_db';
const defaultUsername = 'imcat';
const defaultPassword = 'password1!';
const defaultHost = 'db';
const defaultPort = '5432';
const defaultSchema = 'dev';

const sequelize = new Sequelize(
    process.env.POSTGRES_DB || defaultDatabase,
    process.env.POSTGRES_USER || defaultUsername,
    process.env.POSTGRES_PASSWORD || defaultPassword,
    {
        host: process.env.POSTGRES_HOST || defaultHost,
        port: parseInt(process.env.POSTGRES_PORT || defaultPort),
        dialect: 'postgres',
        schema: process.env.POSTGRES_SCHEMA || defaultSchema,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    }
);

export default sequelize;
