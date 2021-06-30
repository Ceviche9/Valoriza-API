import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";

class UserSendedList {
  async execute(user_id: string) {
    const complimentsRepositories = getCustomRepository(
        ComplimentsRepository
    );

    const compliments = await complimentsRepositories.find({
      where: {
        user_sender: user_id,
      },
    });

    return compliments;
  }
}

export { UserSendedList };