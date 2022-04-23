const User = require("./../models/User");

class UserService {
  static create(id, username, name) {
    return new User(id, username, name, "Sin bio");
  }
  // metodo getInfo
  static getInfo(user) {
    return [user.username, user.name, user.id, user.bio];
  }
}
module.exports = UserService;
