const User = require("./../../app/models/User");
describe("Unit Tests for User class", () => {
  test("1) Create an User object", () => {
    // Aqui invocas el codigo que vas a usar en tu app
    const user = new User(
      1,
      "carlogilmar",
      "Carlo",
      "Bio",
      "dateCreated",
      "lastUpdated"
    );
    // Aqui validas los resultados de ese codigo
    //Esta es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)
    expect(user.id).toBe(1);
    expect(user.username).toBe("carlogilmar");
    expect(user.name).toBe("Carlo");
    expect(user.bio).toBe("Bio");
    expect(user.dateCreated).not.toBeUndefined(); // Verifica que el valor no sea undefined
    expect(user.lastUpdated).not.toBeUndefined();
  });
  test("2) Add getters", () => {
    const user = new User(1, "carlogilmar", "Carlo", "Bio");
    expect(user.getUsername).toBe("carlogilmar");
    expect(user.getBio).toBe("Bio");
    expect(user.getDateCreated).not.toBeUndefined();
    expect(user.getLastUpdated).not.toBeUndefined();
  });
  test("3) Add setters", () => {
    const user = new User(1, "carlogilmar", "Carlo", "Bio");
    user.setUsername = "Gilmar";
    expect(user.username).toBe("Gilmar");
    user.setBio = "New bio";
    expect(user.bio).toBe("New bio");
  });
});
