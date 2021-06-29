import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repositories/ComplimentsRepository"
import { UsersRepositories } from "../repositories/UsersRepositories";


interface ComplimetRequest {

    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;

}

class CreateComplimets {


    async execute ({tag_id, user_sender, user_receiver, message}: ComplimetRequest) {

        const ComplimentsRepo = getCustomRepository(ComplimentsRepository);
        const Users = getCustomRepository(UsersRepositories);

        if(user_sender === user_receiver) {
            throw new Error("You can't send a Tag to yourself");
        }

        const UserReceiver = Users.findOne(user_receiver);

        if(!UserReceiver){
            throw new Error("User Receiver does not exists");
        }

        const compliments = ComplimentsRepo.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        }); 

        await ComplimentsRepo.save(compliments);

        return compliments;
    }
}

export {CreateComplimets}