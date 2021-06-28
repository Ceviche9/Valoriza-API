import {Request, Response } from 'express';
import {CreateTagsService} from '../services/CreateTagsServices';

class TagController{

    async handle(req: Request, res: Response) {

        const {name} = req.body;

        const tagService = new CreateTagsService();

        const tag = await tagService.execute(name);

        return res.json(tag);
    }
}

export {TagController}