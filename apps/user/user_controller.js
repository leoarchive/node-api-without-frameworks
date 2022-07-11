import { UserService } from "./user_service.js"

export const UserController = {
  getUsers: () => UserService.getUsers(),
  create: (body) => UserService.create(body.name, body.old),
}