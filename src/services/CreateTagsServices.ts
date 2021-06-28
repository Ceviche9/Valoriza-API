import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagsRepositories";



class CreateTagsService {

    async execute(name:string) {

        const tagsRepositories = getCustomRepository(TagRepositories);

        if(!name){
            throw new Error('Name is missing');
        }

        const tagAlreadyExist = await tagsRepositories.findOne({
            name
        })

        if(tagAlreadyExist){
            throw new Error('This Tag already exist');
        }

        const tag = tagsRepositories.create({name});

        await tagsRepositories.save(tag);
        return tag

    }
}

export {CreateTagsService}