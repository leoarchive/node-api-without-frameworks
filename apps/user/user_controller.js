import { UserService } from "./user_service.js"

export const UserController = {
  getUsers: (req, res) => {
    res.write(JSON.stringify(UserService.getUsers()));
    res.end();
    return;
  }
}