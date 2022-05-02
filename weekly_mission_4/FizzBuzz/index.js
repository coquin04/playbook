// Clase anterior con la que obtenemos los explorers
const ExplorerService = require("./lib/services/ExplorerServices");
const Reader = require("./lib/utils/Reader");
const explorers = Reader.readJsonFile("./data/explorers.json");

// Aplicación del ExplorerService sobre la lista de explorers
ExplorerService.filterByMission(explorers, "node");
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
ExplorerService.getExplorersUsernamesByMission(explorers, "node");
