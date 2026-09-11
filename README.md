# 📍 Conecta Bairro — Não-Me-Toque / RS

**Projeto Extensionista Universitário • Tecnologia Aplicada à Inclusão Digital • Sem Fins Lucrativos**

O **Conecta Bairro** é um guia comercial e informativo desenvolvido para a cidade de **Não-Me-Toque/RS**. O objetivo principal da aplicação é promover a inclusão digital do comércio local, permitindo que a comunidade encontre facilmente estabelecimentos, serviços e informações históricas da cidade.

---

## 🚀 Funcionalidades

* 🔍 **Busca em Tempo Real:** Filtro inteligente de estabelecimentos por nome ou palavra-chave.
* 🏷️ **Filtro por Categorias:** Navegação rápida entre Alimentação, Cuidados Pessoais, Saúde, Serviços, Comércio, Automotivo, Educação, Esportes & Lazer e Agronegócio.
* 🗺️ **Integração com Google Maps:** Redirecionamento direto ao clicar em qualquer card para a localização exata do estabelecimento.
* 📖 **Página Histórica:** Seção dedicada à história, origens e cultura da cidade de Não-Me-Toque/RS.
* 📱 **Layout Responsivo:** Interface otimizada para computadores, tablets e smartphones.

---

## 🛠️ Tecnologias Utilizadas

### Back-End
* **Node.js:** Ambiente de execução JavaScript no servidor.
* **Express.js:** Framework para criação das rotas de API e fornecimento dos arquivos estáticos (`express.static`).
* **SQLite3:** Banco de dados relacional leve para armazenamento dos estabelecimentos e imagens.
* **CORS:** Middleware para gerenciamento de requisições.

### Front-End
* **HTML5:** Estruturação semântica das páginas `index.html` e `historia.html`.
* **CSS3:** Estilização moderna com variáveis CSS, Grid Layout e Flexbox (`public/css/style.css`).
* **JavaScript (Vanilla):** Consumo dinâmico da API via `fetch` e manipulação do DOM (`public/js/script.js`).

---

## 📁 Estrutura do Projeto

```plaintext
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
```
*(Estrutura extraída do repositório do projeto)*

---

## ⚙️ Como Executar o Projeto Localmente

### Pré-requisitos
* **Node.js** instalado (versão 18 ou superior).

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/guia-do-bairro.git
   cd guia-do-bairro
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Popular o banco de dados e iniciar o servidor:**
   ```bash
   npm start
   ```
   *(Este comando roda o `seed.js` para alimentar o SQLite e inicia o `server.js` na porta 3000).*

4. **Acessar a aplicação:**
   Abra o seu navegador e acesse: `http://localhost:3000`.

---

## 🌐 Deploy na Nuvem

A aplicação está configurada para deploy na plataforma **Render**, utilizando a seguinte instrução no `package.json`:

```json
"scripts": {
  "start": "node seed.js && node server.js"
}
```

Isso garante a recriação e povoamento do banco SQLite no ambiente de hospedagem.

---

## 🎓 Caráter Acadêmico

Este software foi desenvolvido como **Projeto Extensionista Universitário**, sem fins lucrativos, visando promover o desenvolvimento socioeconômico e a inclusão tecnológica da comunidade de Não-Me-Toque/RS.