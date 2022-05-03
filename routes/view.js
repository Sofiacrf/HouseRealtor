const router = require("express").Router();
const path = require("path");

router.get("/catalogo", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/catalogo.html'));
});

router.get("/contacto", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/contacto.html'));
});

module.exports = router;