import { User } from "../../models/user_model.js"

let users = [];

export const UserService = {
  getUsers: () => users,
  create: (name, old) => { 
    const user = users.push(new User(name, old))
    if (user) {
      return "user created successfully"
    }
  }
}