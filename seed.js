const db = require('./database/database.js');

const estabelecimentosFicticios = [
    // 🍔alimentacao
    { 
        nome: 'Artesano Smash Burger', 
        categoria: 'Alimentação - Hamburgueria', 
        endereco: 'R. Alberto Pasqualini, 375 - Martini', 
        status: 'Aberto',
        imagem: '/images/artesanoburger.jpg'
    },
    { 
        nome: 'Restaurante Tia Léia', 
        categoria: 'Alimentação - Restaurante', 
        endereco: 'Av. Guilherme Augustin, 72 - Centro', 
        status: 'Aberto',
        imagem: '/images/tialeia.png'
    },
    { 
        nome: 'Conteiner Lanches', 
        categoria: 'Alimentação - Lancheria', 
        endereco: 'Av. Dr. Waldomiro Graeff, 1047 - Centro', 
        status: 'Aberto',
        imagem: '/images/conteinerlanches.jpg'
    },
    { 
        nome: 'Serranos Pizzaria', 
        categoria: 'Alimentação - Pizzaria', 
        endereco: 'R. Alferes Rodrigo, 478 - Santo Antônio', 
        status: 'Aberto',
        imagem: '/images/serranos-pizzaria.jpg'
    },
    { 
        nome: 'X Lanches Dtalia', 
        categoria: 'Alimentação - Lancheria', 
        endereco: 'R. Dr. Otto Stahl, 1045 - Centro', 
        status: 'Aberto',
        imagem: '/images/xlanches.jpg'
    },

    // ✂️cuidados pessoais
    { 
        nome: 'Barbearia Bruno Lima', 
        categoria: 'Cuidados Pessoais - Barbearia', 
        endereco: 'R. Cel. Alberto Schmitt, 140 - Centro', 
        status: 'Aberto',
        imagem: '/images/barbeariabruno.jpg'
    },
    { 
        nome: 'Na Centro Estético', 
        categoria: 'Cuidados Pessoais - Salão de Beleza', 
        endereco: 'R. São Francisco Solano, 619 - Vila Nova', 
        status: 'Aberto',
        imagem: '/images/nacentroestetico.jpg'
    },
    { 
        nome: 'Espaço L&A', 
        categoria: 'Cuidados Pessoais - Salão de Beleza', 
        endereco: 'R. Piratini, 237 - Boa Vista', 
        status: 'Aberto',
        imagem: '/images/laespaco1.jpg'
    },

    // 💊saude
    { 
        nome: 'Efficare Clínica - Consultório Odontológico', 
        categoria: 'Saúde - Dentista', 
        endereco: 'R. Frei Olímpio Reichert, 512 - Centro', 
        status: 'Aberto',
        imagem: '/images/efficare1.png'
    },
    { 
        nome: 'Farmácia São João', 
        categoria: 'Saúde - Farmácia', 
        endereco: 'Av. Alto Jacuí, 647 - Centro', 
        status: 'Aberto',
        imagem: '/images/saojoao1.jpg'
    },
    { 
        nome: 'Panvel Farmácias', 
        categoria: 'Saúde - Farmácia', 
        endereco: 'Av. Alto Jacuí, 504 - Centro',
        status: 'Aberto',
        imagem: '/images/panvel.jpg'
    },
    { 
        nome: 'LAZO - Centro Especializado em Saúde', 
        categoria: 'Saúde - Saúde Mental', 
        endereco: 'Av. Alto Jacuí, 245 - Centro',
        status: 'Aberto',
        imagem: '/images/lazo.png'
    },

    // 🔧servicos
    { 
        nome: 'Cristech - Ar Condicionado e Energia Solar', 
        categoria: 'Serviços - Instalação/Manutenção', 
        endereco: 'R. Cristiano J Souza, 230 - Ipiranga', 
        status: 'Aberto',
        imagem: '/images/cristech.png'
    },
    { 
        nome: 'Connect Informática', 
        categoria: 'Serviços - Informática', 
        endereco: 'Av. Alto Jacuí, 456 - Centro', 
        status: 'Aberto',
        imagem: '/images/connect.jpg'
    },
    { 
        nome: 'Edson Chaveiro', 
        categoria: 'Serviços - Chaveiro', 
        endereco: 'R. Dr. Otto Stahl, 729 - Centro', 
        status: 'Aberto',
        imagem: '/images/edsonchaveiro.jpg'
    },
    { 
        nome: 'ConstruForte', 
        categoria: 'Serviços - Materiais de Construção', 
        endereco: 'R. Fernando Sturm, 100 - Centro', 
        status: 'Aberto',
        imagem: '/images/construforte.jpg'
    },
    { 
        nome: 'Parfix', 
        categoria: 'Serviços - Ferragem', 
        endereco: 'Av. Alto Jacuí, 36 - Centro', 
        status: 'Aberto',
        imagem: '/images/parfix.jpg'
    },

    // 🛍️comercio
    { 
        nome: 'Mercamax', 
        categoria: 'Comércio - Mercado', 
        endereco: 'Av. Alto Jacuí, 615 - Centro', 
        status: 'Aberto',
        imagem: '/images/mercamax.jpg'
    },
    { 
        nome: 'Ella Exclusive', 
        categoria: 'Comércio - Loja de Roupa',
        endereco: 'R. Liberato Salzano, 204 - Centro', 
        status: 'Aberto',
        imagem: '/images/ella.jpg'
    },
    { 
        nome: 'Papelaria Alto Jacuí', 
        categoria: 'Comércio - Papelaria', 
        endereco: 'Av. Alto Jacuí, 859 - Centro', 
        status: 'Aberto',
        imagem: '/images/papelaria.jpg'
    },
    { 
        nome: 'Agroval Pet Shop', 
        categoria: 'Comércio - Pet Shop', 
        endereco: 'Av. Dr. Waldomiro Graeff, 708 - Centro', 
        status: 'Aberto',
        imagem: '/images/agroval.jpg'
    },
    { 
        nome: 'DONNA Amélia Flores', 
        categoria: 'Comércio - Floricultura', 
        endereco: 'R. Fernando Sturm, 100 - Centro', 
        status: 'Aberto',
        imagem: '/images/donaamelia.jpg'
    },
    { 
        nome: 'Studio Prime', 
        categoria: 'Comércio - Móveis e Planejados', 
        endereco: 'Rua Coronel Alberto Schimitt 259, Centro', 
        status: 'Aberto',
        imagem: '/images/studioprime.png'
    },

    // 🚗automotivo
    { 
        nome: 'DF Auto Elétrica', 
        categoria: 'Automotivo - Manutenção', 
        endereco: 'R. Ulisses Guimarães, 288 - Jardim', 
        status: 'Aberto',
        imagem: '/images/dfauto.png'
    },
    { 
        nome: 'Mecânica do Adão', 
        categoria: 'Automotivo - Manutenção', 
        endereco: 'R. Doná Góia, 181 - Ioris', 
        status: 'Aberto',
        imagem: '/images/mecadao.png'
    },
    { 
        nome: 'Sorento Autopeças', 
        categoria: 'Automotivo - Loja de Produtos', 
        endereco: 'Av. Alto Jacuí, 564 - Ipiranga', 
        status: 'Aberto',
        imagem: '/images/sorento.png'
    },
    { 
        nome: 'Formiga Chapeação', 
        categoria: 'Automotivo - Manutenção', 
        endereco: 'Av. Dr. Waldomiro Graeff, 2218 - Santo Antônio', 
        status: 'Aberto',
        imagem: '/images/formiga.png'
    },

    // 🎓Educacao
    { 
        nome: 'Wizard', 
        categoria: 'Educação - Escola de Idiomas', 
        endereco: 'Av. Dr. Waldomiro Graeff, 1435 - Centro', 
        status: 'Aberto',
        imagem: '/images/wizard.jpg'
    },
    { 
        nome: 'Fisk', 
        categoria: 'Educação - Escola de Idiomas', 
        endereco: 'R. Augusto Scherer, 783 - Centro', 
        status: 'Aberto',
        imagem: '/images/fisk.jpg'
    },
    { 
        nome: 'Opportunity', 
        categoria: 'Educação - Escola de Profissões', 
        endereco: 'Av. Dr. Waldomiro Graeff, 1981 - Centro', 
        status: 'Aberto',
        imagem: 'images/oportunitty.png'
    },
    { 
        nome: 'Sete de Setembro', 
        categoria: 'Educação - Escola de Ensino Fundamental', 
        endereco: 'R. Cel. Alberto Schmitt, 700 - Centro', 
        status: 'Aberto',
        imagem: 'images/escolasete.png'
    },
    { 
        nome: 'Anhanguera e Unopar', 
        categoria: 'Educação - Faculdade e Universidade', 
        endereco: 'Av. Alto Jacuí, 572 - Centro', 
        status: 'Aberto',
        imagem: 'images/faculdade.png'
    },
    { 
        nome: 'Girassol', 
        categoria: 'Educação - Escola de Educação Básica', 
        endereco: 'v. Dr. Waldomiro Graeff, 1159 - Centro', 
        status: 'Aberto',
        imagem: 'images/girassol.png'
    },

    // 🏋️Esportes & Lazer
    { 
        nome: 'i9 Padel', 
        categoria: 'Esportes & Lazer - Quadra de Padel', 
        endereco: 'R. Berlim, 243 - Bairro Pôr do Sol', 
        status: 'Aberto',
        imagem: '/images/i9padel.png'
    },
    { 
        nome: 'Arena Society NMT', 
        categoria: 'Esportes & Lazer - Campo de Futebol 7', 
        endereco: 'R. Eurídes de Freitas, 832 - Arlindo Hermes', 
        status: 'Aberto',
        imagem: '/images/society.png'
    },
    { 
        nome: 'Winner Esports', 
        categoria: 'Esportes & Lazer - Padel e Beach Tênnis', 
        endereco: 'Av. Alto Jacuí, 1261 - Centro', 
        status: 'Aberto',
        imagem: '/images/winner.png'
    },
    { 
        nome: 'Empório 360', 
        categoria: 'Esportes & Lazer - Bar', 
        endereco: 'R. Dr. Otto Stahl, 1043 - Centro', 
        status: 'Aberto',
        imagem: '/images/emporio.png'
    },
    { 
        nome: 'LF Academia e Personal', 
        categoria: 'Esportes & Lazer - Academia', 
        endereco: 'R. Liberato Salzano, 146 - Centro', 
        status: 'Aberto',
        imagem: '/images/lfacademia.png'
    },
    { 
        nome: '512 Pub', 
        categoria: 'Esportes & Lazer - Bar', 
        endereco: 'Av. Guilherme Augustin, 482 - Stara', 
        status: 'Aberto',
        imagem: '/images/512pub.png'
    },

    // 🌱Agronegocio
    { 
        nome: 'Stara', 
        categoria: 'Agronegócio - Máquinas e Implementos', 
        endereco: 'Stara, Não-Me-Toque - RS', 
        status: 'Aberto',
        imagem: '/images/stara.png'
    },
    { 
        nome: 'Jan', 
        categoria: 'Agronegócio - Máquinas e Implementos', 
        endereco: 'Av. Dr. Waldomiro Graeff, 557 - Centro', 
        status: 'Aberto',
        imagem: '/images/jan.png'
    },
    { 
        nome: 'Sementes Roos', 
        categoria: 'Agronegócio - Sementes, Grãos e Insumos', 
        endereco: 'Av. Dr. Waldomiro Graeff, 3132', 
        status: 'Aberto',
        imagem: '/images/roos.png'
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