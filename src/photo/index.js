import { Router } from 'express';
import photoControler from './controler.js'

const photoRouter = new Router();

//роути 
photoRouter.get('/', photoControler.get);
photoRouter.get('/:countOfLikes', photoControler.getByCountOfLikes);
photoRouter.post('/', photoControler.post);
photoRouter.delete('/:id', photoControler.delete_id);
photoRouter.patch('/:id', photoControler.patch);

export default photoRouter;