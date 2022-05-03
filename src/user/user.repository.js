const { uuid } = require("uuidv4");
const HttpError = require("../utils/httpError");

class UserRepository {
  constructor() {
    this.users = [
      {
        id: "cb942744-611b-4e57-bac9-047a4e17c960",
        name: "Igor Garcia",
        login: "igorgarciaco",
        email: "igorgarciaco@gmail.com"
      }
    ];
  }

  getUserByNameOrEmail({ name, email }) {
    return this.users.find((item) => {
      return (
        item.name?.toLowerCase() === name?.toLowerCase() ||
        item.email?.toLowerCase() === email?.toLowerCase()
      );
    });
  }

  getOne(id) {
    const userFound = this.users.find((item) => item.id === id);

    if (!userFound) {
      throw new HttpError(404, "User not found");
    }

    return userFound;
  }

  getAll() {
    return this.users.map((item) => {
      return {
        id: item.id,
        name: item.name,
        email: item.email,
        login: item.login
      };
    });
  }

  save(userData) {
    const finalUser = {
      id: uuid(),
      ...userData
    };

    this.users.push(finalUser);

    return finalUser;
  }

  deleteById(userId) {
    // get exist user
    const userFound = this.users.find((item) => item.id === userId);

    if (!userFound) {
      throw new HttpError(404, "User not found");
    }

    // filter the user list removing the user based on userId
    this.users = this.users.filter((item) => item.id !== userId);

    return userFound;
  }

  updateById(userData) {
    this.users = this.users.map((user) => {
      if (user.id === userData.id) {
        return userData;
      } else {
        return user;
      }
    });

    return userData;
  }
}

module.exports = new UserRepository();
