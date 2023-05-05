const controller = require("../controllers/users.controller");

module.exports = function(app) {
    app.get("/users", controller.getUsers);
}
