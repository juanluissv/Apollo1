const { sortBy } = require("ramda");
const { experimentDb } = require("./db");
const { addIds } = require("./utils");

const getExperiments = async ({ status }) => {
  // Construct the filters
  let filters = {};
  if (status === "submitted") filters.status = "submitted";
  if (status === "approved") filters.status = "approved";
  if (status === "provisioning") filters.status = "provisioning";
  if (status === "underway") filters.status = "underway";

  const experiments = await experimentDb.find(filters);
  return sortBy(experiment => experiment.title.toLowerCase(), addIds(experiments));
};

module.exports = { getExperiments };