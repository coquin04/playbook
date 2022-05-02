class ExplorerService {
  static filterByMission(explorers, mission) {
    const explorersInNode = explorers.filter(
      (explorer) => explorer.mission == mission
    );
    return explorersInNode;
  }
  static getAmountOfExplorersByMission(explorers, mission) {
    const explorersInNode = this.filterByMission(explorers, mission);
    return explorersInNode.length;
  }
  static getExplorersUsernamesByMission(explorers, mission) {
    const explorersInNodeToGetUsernames = this.filterByMission(
      explorers,
      mission
    );
    const usernamesInNode = explorersInNodeToGetUsernames.map(
      (explorers) => explorers.githubUsername
    );
    return usernamesInNode;
  }
}
module.exports = ExplorerService;
