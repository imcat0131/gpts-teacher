// src/main/index.ts
import express from 'express';
import { container } from './dependencyInjector';
import { getUserRoutes } from '../adapter/routers/userRouter';
import { UserController } from '../adapter/controllers/userController';
import { helloWorld } from '../adapter/routers/testRouter';
import sequelize from "../infrastructure/database/config";
import logger from '../infrastructure/logging/logger';

// DB接続
sequelize.authenticate()
.then(() => {
    logger.info('Connection has been established successfully.');
})
.catch((err: any) => {
    logger.error('Unable to connect to the database:', err);
});

// DB同期
sequelize.sync({ force: false })  // forceをtrueにすると、既存のテーブルを削除して再作成します
.then(() => logger.info('Models synced with the database.'))
.catch(err => logger.error('Error syncing models with the database:', err));



// express init and config
const app = express();

// test endpoint
app.use('/', helloWorld());

// user endpoint
const userController = container.get<UserController>('UserController');
app.use('/api', getUserRoutes(userController));

// app listen config
app.listen(3000, () => {
    logger.info('Server is running on port 3000');
});
