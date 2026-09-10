const express = require("express");
const router = express.Router();

const db = require("../database/database");

// GET /api/estabelecimentos
// GET /api/estabelecimentos?categoria=Alimentação
// GET /api/estabelecimentos?q=barbearia
router.get("/", (req, res) => {
  const { categoria, q } = req.query;

  let sql = "SELECT * FROM estabelecimentos WHERE 1 = 1";
  const parametros = [];

  if (categoria) {
    sql += " AND categoria = ?";
    parametros.push(categoria);
  }

  if (q) {
    sql += " AND (nome LIKE ? OR categoria LIKE ? OR descricao LIKE ?)";
    const termo = `%${q}%`;
    parametros.push(termo, termo, termo);
  }

  sql += " ORDER BY destaque DESC, nome ASC";

  db.all(sql, parametros, (erro, resultados) => {
    if (erro) {
      return res.status(500).json({ erro: erro.message });
    }
    res.json(resultados);
  });
});

// GET /api/estabelecimentos/:id
router.get("/:id", (req, res) => {
  const sql = "SELECT * FROM estabelecimentos WHERE id = ?";

  db.get(sql, [req.params.id], (erro, resultado) => {
    if (erro) {
      return res.status(500).json({ erro: erro.message });
    }
    if (!resultado) {
      return res.status(404).json({ erro: "Estabelecimento não encontrado." });
    }
    res.json(resultado);
  });
});

module.exports = router;
