const Reader = require("../lib/utils/Reader");
const ExplorerService = require("../lib/services/ExplorerServices");
describe("Unit test for ExplorerService class", () => {
  test("1. Prueba para el metodo filterByMission", () => {
    const explorers = Reader.readJsonFile("./test/data/explorers-test.json");
    const explorersInNode = ExplorerService.filterByMission(explorers, "node");
    expect(explorersInNode.length).toBe(10);
  });
  test("2. Prueba para el metodo getAmountOfExplorersByMision", () => {
    const explorers = Reader.readJsonFile("./test/data/explorers-test.json");
    const amountOfExplorersByMission =
      ExplorerService.getAmountOfExplorersByMission(explorers, "node");
    expect(amountOfExplorersByMission).toBe(10);
  });
});
