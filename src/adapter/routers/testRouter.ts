// src/adapter/routers/testRouter.ts
import { Router } from 'express'

export function helloWorld(): Router {
    const router = Router();
    router.get('/', (req, res) => {res.send('Hello World');});
    return router;
}

