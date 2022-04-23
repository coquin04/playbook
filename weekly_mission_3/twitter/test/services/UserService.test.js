const UserService = require("./../../app/services/UserService");
describe("Tests for UserService class", () => {
  test("1. Create a new user using the UserService class", () => {
    const user = UserService.create(1, "carlogilmar", "Carlo");
    expect(user.username).toBe("carlogilmar");
    expect(user.name).toBe("Carlo");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  });
  test("2. Get all user data in a list", () => {
    const user = UserService.create(1, "carlogilmar", "Carlo");
    const userInfoInList = UserService.getInfo(user);
    expect(userInfoInList[0]).toBe("carlogilmar");
    expect(userInfoInList[1]).toBe("Carlo");
    expect(userInfoInList[2]).toBe(1);
    expect(userInfoInList[3]).not.toBeUndefined();
  });
});
