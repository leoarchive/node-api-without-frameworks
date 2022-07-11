import { UserController } from "./apps/user/user_controller.js"

export const routes = [
  {
    url: "/Users",
    method: "GET",
    controller: (req, res) => UserController.getUsers(req, res)  
  }
];