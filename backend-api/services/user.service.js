var User = require("../models/user.model");

exports.getUsers = async function (query, page, limit) {
  try {
    var users = await User.getUsers;
    return users;
  } catch (e) {
    // Log Errors
    throw Error("Error while Paginating Users");
  }
};
