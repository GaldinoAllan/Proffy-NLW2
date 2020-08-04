import express from 'express';
import ClassesController from './controllers/ClassesController';

const routes = express.Router();
const ClassesContoller = new ClassesController

routes.get('/classes', ClassesContoller.index);
routes.post('/classes', ClassesContoller.create);

export default routes
