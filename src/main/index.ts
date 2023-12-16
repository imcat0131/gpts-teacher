// src/main/index.ts
import express from 'express';
import { container } from './dependencyInjector';
import { getUserRoutes } from '../adapter/routers/userRouter';
import { UserController } from '../adapter/controllers/userController';
import { helloWorld } from '../adapter/routers/testRouter';

const app = express();

// test endpoint
app.use('/', helloWorld());

// user endpoint
const userController = container.get<UserController>('UserController');
app.use('/api', getUserRoutes(userController));


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
