/* Simple Code made just to give a service to the application */

var api = require("../api");

module.exports = function (app) {
  app.route("/dados").get(api.dados);
};
