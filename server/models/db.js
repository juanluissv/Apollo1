/**
 * This is where we set up the database, in this case NeDB (with the promise wrapper)
 */
const Datastore = require("nedb-promise");

const experimentDb = new Datastore({
  filename: "./experiments.json",
  autoload: true
});

module.exports = { experimentDb };
