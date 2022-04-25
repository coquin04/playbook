const UserService = require("./../services/UserService");

class UserView {
  static createUser(payload) {
    if (payload === null) {
      return { error: "payload no existe" };
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
