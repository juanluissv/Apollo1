const { getExperiments } = require("../models/Experiment");
const sleep = require("../utils/sleep");

module.exports = {
  Query: {
    experiments: async (_, args) => {
      await sleep(global.delay);
      return getExperiments(args);
    }
  },
};
