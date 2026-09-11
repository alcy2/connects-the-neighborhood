const db = require('./database/database.js');

const estabelecimentosFicticios = [
    // 🍔alimentacao
    { 
        nome: 'Hamburgueria do Zé', 
        categoria: 'Alimentação', 
        endereco: 'Rua Padre Valentim, 245', 
        status: 'Aberto',
        imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'
    },
    { 
        nome: 'Teste', 
        categoria: 'Alimentação', 
        endereco: 'Rua Liberato Salzano, 230 - centro', 
        status: 'Aberto',
        imagem: '/images/mecanica-automotiva.jpg'
    },
    { 
        nome: 'Conteiner Lanches', 
        categoria: 'Alimentação', 
        endereco: 'Av. Dr. Waldomiro Graeff, 1047 - Centro', 
        status: 'Aberto',
        imagem: '/images/conteinerlanches.jpg'
    },
    { 
        nome: 'Pizzaria Não-Me-Toque', 
        categoria: 'Alimentação', 
        endereco: 'R. Alferes Rodrigo, 478 - Santo Antônio', 
        status: 'Aberto',
        imagem: '/images/serranos-pizzaria.jpg'
    },
    { 
        nome: 'Padaria e Confeitaria Central', 
        categoria: 'Alimentação', 
        endereco: 'Av. Dr. Waldomiro Graeff, 310', 
        status: 'Aberto',
        imagem: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500'
    },

    // ✂️cuidados pessoais
    { 
        nome: 'Gisélia Elegance', 
        categoria: 'Cuidados Pessoais', 
        endereco: 'Rua Pedro Augustin, 432', 
        status: 'Aberto',
        imagem: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500'
    },
    { 
        nome: 'Barbearia Central', 
        categoria: 'Cuidados Pessoais', 
        endereco: 'Av. Alto Jacuí, 812', 
        status: 'Aberto',
        imagem: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500'
    },
    { 
        nome: 'Studio Beleza & Estética', 
        categoria: 'Cuidados Pessoais', 
        endereco: 'Rua Otto Stahl, 105', 
        status: 'Aberto',
        imagem: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500'
    },

    // 💊saude
    { 
        nome: 'Farma Bem', 
        categoria: 'Saúde', 
        endereco: 'Rua Getúlio Vargas, 680', 
        status: 'Aberto',
        imagem: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=500'
    },
    { 
        nome: 'Farmácia São João', 
        categoria: 'Saúde', 
        endereco: 'Av. Alto Jacuí, 450', 
        status: 'Aberto',
        imagem: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500'
    },
    { 
        nome: 'Clínica Odontológica Sorrir', 
        categoria: 'Saúde', 
        endereco: 'Rua Pedro Augustin, 112', 
        status: 'Aberto',
        imagem: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500'
    },

    // 🔧servicos
    { 
        nome: 'Auto Tech Serviços', 
        categoria: 'Serviços', 
        endereco: 'Rua Otto Stahl, 410', 
        status: 'Aberto',
        imagem: '/images/mecanica-automotiva.jpg'
    },
    { 
        nome: 'Eletro Consertos NMT', 
        categoria: 'Serviços', 
        endereco: 'Rua Augusto De Carli, 301', 
        status: 'Aberto',
        imagem: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500'
    },
    { 
        nome: 'Escritório Contábil Progresso', 
        categoria: 'Serviços', 
        endereco: 'Rua Padre Valentim, 510', 
        status: 'Aberto',
        imagem: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500'
    },

    // 🛍️comercio
    { 
        nome: 'Supermercado do Bairro', 
        categoria: 'Comércio', 
        endereco: 'Av. Alto Jacuí, 1550', 
        status: 'Aberto',
        imagem: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=500'
    },
    { 
        nome: 'Loja Estilo & Moda', 
        categoria: 'Comércio', 
        endereco: 'Rua Pedro Augustin, 201', 
        status: 'Aberto',
        imagem: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500'
    },
    { 
        nome: 'Bazar e Papelaria Horizonte', 
        categoria: 'Comércio', 
        endereco: 'Av. Dr. Waldomiro Graeff, 620', 
        status: 'Aberto',
        imagem: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500'
    },

    // 🚗automotivo
    { 
        nome: 'Mecânica e Auto Center Jacuí', 
        categoria: 'Automotivo', 
        endereco: 'RS-142, Km 2', 
        status: 'Aberto',
        imagem: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500'
    },
    { 
        nome: 'Posto de Combustíveis Rota 142', 
        categoria: 'Automotivo', 
        endereco: 'Av. Alto Jacuí, 2200', 
        status: 'Aberto',
        imagem: '/images/posto-combustivel.jpg'
    },

    // 🎓Educacao
    { 
        nome: 'Escola de Idiomas Skill Up', 
        categoria: 'Educação', 
        endereco: 'Rua Alberto Pasqualini, 150', 
        status: 'Aberto',
        imagem: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500'
    },
    { 
        nome: 'Centro de Reforço Escolar Aprender', 
        categoria: 'Educação', 
        endereco: 'Rua Getúlio Vargas, 230', 
        status: 'Aberto',
        imagem: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500'
    },

    // 🏋️Esportes & Lazer
    { 
        nome: 'Academia Fit & Saúde', 
        categoria: 'Esportes & Lazer', 
        endereco: 'Av. Dr. Waldomiro Graeff, 1020', 
        status: 'Aberto',
        imagem: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500'
    },
    { 
        nome: 'Arena de Society NMT', 
        categoria: 'Esportes & Lazer', 
        endereco: 'Rua Otto Stahl, 1500', 
        status: 'Aberto',
        imagem: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500'
    },

    // 🌱Agronegocio
    { 
        nome: 'Agro Campo Insumos', 
        categoria: 'Agronegócio', 
        endereco: 'Av. Guilherme Augustin, 1200', 
        status: 'Aberto',
        imagem: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500'
    },
    { 
        nome: 'Sementes & Assistência Técnica RS', 
        categoria: 'Agronegócio', 
        endereco: 'Rodovia RS-142, Km 5', 
        status: 'Aberto',
        imagem: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=500'
    }
];

db.serialize(() => {
    db.run(`ALTER TABLE estabelecimentos ADD COLUMN imagem TEXT`, (err) => {
    });

    db.run(`DELETE FROM estabelecimentos`, (err) => {
        if (err) console.error('Erro ao limpar a tabela:', err.message);
    });

    const stmt = db.prepare(`INSERT INTO estabelecimentos (nome, categoria, endereco, status, imagem) VALUES (?, ?, ?, ?, ?)`);

    estabelecimentosFicticios.forEach(item => {
        stmt.run(item.nome, item.categoria, item.endereco, item.status, item.imagem);
    });

    stmt.finalize(() => {
        console.log('Banco populado com sucesso com nomes, endereços e imagens!');
    });
});