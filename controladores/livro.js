function getLivros(req, res){
  try {
    res.send("Olá mundo de Frank!");
  } catch (error) {
    req.statusCode(500);
    res.send(error.message);
  }
}

module.exports = {
    getLivros
}