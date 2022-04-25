const User = require("../models/User");
const UserService = require("./../../app/services/UserService");

class UserView {
  static createUser(payload) {
    // Para pasar el primer test
    if (payload === null) {
      return { error: "payload no existe" };
      // Para pasar el segundo test
    } else if (Object.values(payload).some((value) => value === null)) {
      return { error: "necesitan tener un valor valido" };
      // Para pasar el tercer test
    } else if (
      !["username", "name", "id"].every((key) =>
        Object.keys(payload).includes(key)
      )
    ) {
      return { error: "necesitan tener un valor valido" };
    } else {
      return UserService.create(payload.id, payload.username, payload.name);
    }
  }
}
module.exports = UserView;
