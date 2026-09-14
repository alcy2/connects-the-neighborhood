const express = require('express');
const cors = require('cors');
const path = require('path');

const db = require('./database/database.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Servir os arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//Buscar estabelecimentos//
app.get('/api/estabelecimentos', (req, res) => {
    const { busca, categoria } = req.query;

    let sql = 'SELECT * FROM estabelecimentos WHERE 1=1';
    let params = [];

    // Filtro por Categoria
    if (categoria && categoria.trim() !== '' && categoria !== 'Todas') {
        sql += ' AND LOWER(categoria) LIKE LOWER(?)';
        params.push(`%${categoria.trim()}%`);
    }

    // Filtro por Nome ou Serviço na Busca
    if (busca && busca.trim() !== '') {
        sql += ' AND (LOWER(nome) LIKE LOWER(?) OR LOWER(categoria) LIKE LOWER(?))';
        const termo = `%${busca.trim()}%`;
        params.push(termo, termo);
    }

    db.all(sql, params, (err, rows) => {
        if (err) {
            console.error('Erro na consulta ao SQLite:', err.message);
            return res.status(500).json({ error: 'Erro ao buscar dados no servidor.' });
        }
        res.json(rows);
    });
});

app.listen(PORT, () => {
    console.log(`Servidor Conecta Bairro rodando em: http://localhost:${PORT}`);
});