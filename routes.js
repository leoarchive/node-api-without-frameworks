import { UserController } from "./apps/user/user_controller.js"

export const routes = [
  {
    url: "/users",
    method: "GET",
    controller: (req, res, body) => { 
      res.write(JSON.stringify(UserController.getUsers()));
      res.end();
    }
  },
  {
    url: "/users/create",
    method: "POST",
    controller: (req, res, body) => {
      res.write(UserController.create(body));
      res.end();
    }   
  },
];