# 📍 Conecta Bairro — Não-Me-Toque / RS

> **Projeto Extensionista Universitário** • Tecnologia Aplicada à Inclusão Digital • Sem Fins Lucrativos

O **Conecta Bairro** é um guia comercial e informativo desenvolvido para a cidade de **Não-Me-Toque/RS**. O objetivo principal da aplicação é promover a inclusão digital do comércio local, permitindo que a comunidade encontre facilmente estabelecimentos, serviços e informações históricas da cidade.

---

## 🚀 Funcionalidades

* 🔍 **Busca em Tempo Real**: Filtro inteligente de estabelecimentos por nome ou palavra-chave.
* 🏷️ **Filtro por Categorias**: Navegação rápida entre Alimentação, Cuidados Pessoais, Saúde, Serviços, Comércio, Automotivo, Educação, Esportes & Lazer e Agronegócio.
* 🗺️ **Integração com Google Maps**: Redirecionamento direto ao clicar em qualquer card para a localização exata do estabelecimento.
* 📖 **Página Histórica**: Seção dedicada à história, origens e cultura da cidade de Não-Me-Toque/RS.
* 📱 **Layout Responsivo**: Interface otimizada para computadores, tablets e smartphones.

---

## 🛠️ Tecnologias Utilizadas

### **Back-End**
* **Node.js**: Ambiente de execução JavaScript no servidor.
* **Express.js**: Framework para criação das rotas de API e fornecimento dos arquivos estáticos (`express.static`).
* **SQLite3**: Banco de dados relacional leve para armazenamento dos estabelecimentos e imagens.
* **CORS**: Middleware para gerenciamento de requisições.

### **Front-End**
* **HTML5**: Estruturação semântica das páginas `index.html` e `historia.html`.
* **CSS3**: Estilização moderna com variáveis CSS, Grid Layout e Flexbox (`public/css/style.css`).
* **JavaScript (Vanilla)**: Consumo dinâmico da API via `fetch` e manipulação do DOM.

---

## 📁 Estrutura do Projeto

```text
guia-do-bairro/
├── database/
│   ├── database.js          # Conexão com SQLite e schema da tabela
│   └── database.sqlite      # Arquivo local do banco de dados
├── public/
│   ├── css/
│   │   └── style.css        # Estilos globais da aplicação
│   ├── images/              # Imagens dos estabelecimentos e banners
│   ├── js/
│   │   └── script.js        # Lógica de consumo da API no front-end
│   ├── historia.html        # Página da História de Não-Me-Toque/RS
│   └── index.html           # Página principal do guia
├── .gitignore               # Arquivos ignorados pelo Versionamento
├── package.json             # Dependências e scripts de inicialização
├── seed.js                  # Script para popular o banco de dados
└── server.js                # Servidor HTTP Express