
import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";

class UserComplimentsList {
  async execute(user_id: string) {
    const complimentsRepositories = getCustomRepository(
        ComplimentsRepository
    );

    const compliments = await complimentsRepositories.find({
      where: {
        user_receiver: user_id,
      },
      relations: ["userSender", "userReceiver", "tag"],
    });

    return compliments;
  }
}

export { UserComplimentsList };