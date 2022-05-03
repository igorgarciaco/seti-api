const userRepository = require("./user.repository");
const HttpError = require("../utils/httpError");

class UserController {
  save(dataToSave) {
    if (dataToSave.password.length < 6) {
      throw new HttpError(400, "Password should have more than 6 characters");
    }

    const exist = userRepository.getUserByNameOrEmail({
      name: dataToSave.name,
      email: dataToSave.email,
      login: dataToSave.login
    });

    if (exist) {
      throw new HttpError(400, "User already exist");
    }

    return userRepository.save(dataToSave);
  }

  getAll() {
    return userRepository.getAll();
  }

  getOne(id) {
    return userRepository.getOne(id);
  }

  put() {}

  deleteById(userId) {
    return userRepository.deleteById(userId);
  }
}

module.exports = new UserController();
