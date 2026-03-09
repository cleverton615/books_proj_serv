const { Router } = require("express");
const { getLivros } = require("../controladores/livro");

const router = Router();

router.get("/", getLivros);

router.post("/", (req, res) => {
  res.send("Você fez uma requisição POST para /livro");
});

router.patch("/", (req, res) => {
  res.send("Você fez uma requisição PATCH para /livro");
});

router.delete("/", (req, res) => {
  res.send("Você fez uma requisição DELETE para /livro");
});

module.exports = router;
