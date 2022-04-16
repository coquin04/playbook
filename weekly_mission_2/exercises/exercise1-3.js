const pullRequest = {
  title: "PR_n",
  branchName: "main",
  dateCreated: Date.now("yymmdd"),
  status: "success",
  repositoryNameAssociated: "parentRepo",
  getStatus: function () {
    return this.status;
  },
  getTitleAndBranch: function () {
    return `Titulo del PR: ${this.title} y branch: ${this.branchName}`;
  },
};
console.log("informacion de estatus: " + pullRequest.getStatus());
console.log(pullRequest.getTitleAndBranch());
