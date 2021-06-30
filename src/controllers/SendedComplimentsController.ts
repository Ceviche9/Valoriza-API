import { Request, Response } from "express";
import { UserSendedList } from "../services/UserSendedList";

class ListUserSendComplimentsController {
 
    async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserSendComplimentsService = new UserSendedList();

    const compliments = await listUserSendComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserSendComplimentsController };