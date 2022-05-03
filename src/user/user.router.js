const router = require("express").Router();
const userController = require("./user.controller");

router.post("/", (req, res, next) => {
  const data = userController.save(req.body);

  res.status(200).json({
    message: "Usuário cadastrado",
    data
  });
});

router.get("/", (req, res) => {
  const data = userController.getAll();

  res.status(200).json({
    message: "Lista de usuários",
    data
  });
});

router.get("/:id", (req, res) => {
  const data = userController.getOne("cb942744-611b-4e57-bac9-047a4e17c960");

  res.status(200).json({
    message: "Usuário encontrado",
    data
  });
});

router.delete("/:id", (req, res) => {
  const data = userController.deleteById(req.params.id);

  res.status(200).json({
    message: "Usuário removido",
    data
  });
});

module.exports = router;
