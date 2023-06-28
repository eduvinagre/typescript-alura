/* Simple Code made juste to oapenas para fornecer o serviço para a aplicação */

var api = require("../api");

module.exports = function (app) {
  app.route("/dados").get(api.dados);
};
