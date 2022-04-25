const UserService = require("./../services/UserService");

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
      !["username", "name", "id"].every((key) => key in Object.keys(payload))
    ) {
      return { error: "necesitan tener un valor valido" };
    } else {
      return UserService.create(
        (id = payload.id),
        (username = payload.username),
        (name = payload.name)
      );
    }
  }
}
module.exports = UserView;
