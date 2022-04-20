const MissionCommander = require("./../app/missionCommander");

describe("Unit test for mission commander Class", () => {
  test("1) Create a mission commander object", () => {
    const myMissionCommander = new MissionCommander("Woopa");
    expect(myMissionCommander.name).toBe("Woopa");
  });
});
