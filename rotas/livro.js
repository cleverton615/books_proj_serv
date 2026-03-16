const { Router } = require("express");
const { getLivros, getLivro, postLivro } = require("../controladores/livro");

const router = Router();

router.get("/", getLivros);
router.get("/:id", getLivro);

router.post("/", postLivro);

router.patch("/", (req, res) => {
  res.send("Você fez uma requisição PATCH para /livro");
});

router.delete("/", (req, res) => {
  res.send("Você fez uma requisição DELETE para /livro");
});

module.exports = router;
