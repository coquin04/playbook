const issue = {
  title: "LaunchX",
  repositoryNameAssociated: "Mission X",
  status: 404,
  numberOfComments: 100,
  labels: ["space", "travel", "learning", "fun"],
  author: "Coquin",
  dateCreated: "15-04-22",
  lastUpdated: Date.now(),

  getTitleAndAuthor: function () {
    return `El titulo del issue es: ${this.title} y este es su autor: ${this.author}`;
  },
  getGeneralInfo: function () {
    return `This issue ${this.status} was created by ${this.author} on ${this.dateCreated} and updated on ${this.lastUpdated}`;
  },
};

console.log("Nombre del issue:" + issue.title);
console.log("Titulo y autor: " + issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());
