<h1>Overwatch2 Hero Picker</h1>
<p>
  <strong>Overwatch2 Hero Picker</strong> é uma API RESTful projetada para fãs de <em>Overwatch 2</em>, permitindo que jogadores criem perfis e marquem seus heróis favoritos. A aplicação consome uma API não oficial do <em>Overwatch</em> para obter dados atualizados de heróis (como nome, função, etc.) e os armazena automaticamente em um banco MongoDB ao iniciar. Jogadores podem registrar perfis e associar heróis favoritos, com validação robusta de dados via Yup e gerenciamento de banco via Mongoose, garantindo uma experiência confiável e personalizada.
</p>
<h2>Funcionalidades</h2>
<ul>
  <li><strong>Integração com API do Overwatch</strong>: Consome uma API não oficial para buscar informações de heróis, como Tracer, Reinhardt ou Mercy.</li>
  <li><strong>Gerenciamento de Jogadores</strong>: Criação e consulta de perfis de jogadores com informações básicas (ex.: ID, nome).</li>
  <li><strong>Favoritagem de Heróis</strong>: Jogadores podem adicionar heróis à sua lista de favoritos, associando-os ao seu perfil.</li>
  <li><strong>Validação de Dados</strong>: Usa Yup para validar DTOs (Data Transfer Objects) em requisições, garantindo que entradas como IDs sejam válidas (ex.: números inteiros positivos).</li>
  <li><strong>Persistência com MongoDB</strong>: Armazena jogadores, heróis e favoritos em um banco de dados MongoDB, gerenciado pelo Mongoose.</li>
  <li><strong>API RESTful</strong>: Oferece endpoints como <code>POST /players</code>, <code>POST /favorites</code> e <code>GET /players/:id/favorites</code> para interagir com o sistema.</li>
  <li><strong>Paginamento, Filtro e Ordenação</strong>: Implementação de funcionalidades para paginar, filtrar e ordenar heróis e favoritos.</li>
</ul>
<h2>Tecnologias Utilizadas</h2>
<ul>
  <li><strong>Node.js/Express</strong>: Framework para criar a API RESTful, gerenciando rotas e requisições.</li>
  <li><strong>JavaScript</strong>: Linguagem principal, usada em todo o projeto para compatibilidade.</li>
  <li><strong>Mongoose</strong>: ORM para gerenciar o banco MongoDB e abstrair as consultas.</li>
  <li><strong>MongoDB</strong>: Banco de dados para armazenar jogadores, heróis e favoritos.</li>
  <li><strong>Yup</strong>: Biblioteca de validação para garantir a integridade dos DTOs.</li>
  <li><strong>Axios</strong>: Cliente HTTP para consumir a API não oficial do <em>Overwatch</em>.</li>
  <li><strong>dotenv</strong>: Gerenciamento de variáveis de ambiente (ex.: URL da API externa).</li>
  <li><strong>Docker</strong>: Usado para subir o MongoDB sem precisar instalar na máquina.</li>
</ul>
<h2>Pré-requisitos</h2>
<p>Antes de começar, certifique-se de ter instalado:</p>
<ul>
  <li><a href="https://nodejs.org/">Node.js</a> (v16 ou superior)</li>
  <li><a href="https://www.npmjs.com/">npm</a> (incluído com Node.js)</li>
  <li><a href="https://www.docker.com/get-started">Docker</a> (opcional, se você deseja rodar o MongoDB via Docker)</li>
</ul>
<h2>Instalação</h2>
<ol>
  <li>
    <p><strong>Clone o repositório</strong>:</p>
    <pre><code>git clone https://github.com/seu-usuario/overwatch2-hero-picker.git
cd overwatch2-hero-picker</code></pre>
  </li>
  <li>
    <p><strong>Instale as dependências</strong>:</p>
    <pre><code>npm install</code></pre>
  </li>
  <li>
    <p><strong>Configure as variáveis de ambiente</strong>:</p>
    <p>Crie um arquivo <code>.env</code> na raiz com base no <code>.env.example</code>:</p>
    <pre><code>PORT=3000
API_OVERWATCH_URL=https://api-externa-overwatch.com/heroes
MONGO_URI=mongodb://localhost:27017/overwatch2hero</code></pre>
    <p>Substitua <code>API_OVERWATCH_URL</code> pela URL real da API não oficial.</p>
  </li>
  <li>
    <p><strong>Suba o MongoDB com Docker</strong> (opcional):</p>
    <p>Se preferir rodar o MongoDB via Docker, use o comando:</p>
    <pre><code>docker run --name overwatch-mongo -p 27017:27017 -d mongo</code></pre>
  </li>
  <li>
    <p><strong>Inicie o servidor</strong>:</p>
    <pre><code>npm start</code></pre>
    <p>A API estará disponível em <code>http://localhost:3000</code>. Na inicialização, o sistema consumirá a API do <em>Overwatch</em>, sincronizará os heróis no banco e estará pronto para uso.</p>
  </li>
</ol>
<h2>Endpoints Principais</h2>
<table>
  <tr>
    <th>Método</th>
    <th>Endpoint</th>
    <th>Descrição</th>
    <th>Exemplo de Body</th>
  </tr>
  <tr>
    <td>POST</td>
    <td><code>/players</code></td>
    <td>Cria um novo jogador</td>
    <td><code>{ "name": "Player1" }</code></td>
  </tr>
  <tr>
    <td>GET</td>
    <td><code>/players/:id</code></td>
    <td>Retorna os dados de um jogador</td>
    <td>-</td>
  </tr>
  <tr>
    <td>POST</td>
    <td><code>/favorites</code></td>
    <td>Adiciona um herói favorito</td>
    <td><code>{ "userId": 1, "heroId": 1 }</code></td>
  </tr>
  <tr>
    <td>GET</td>
    <td><code>/players/:id/favorites</code></td>
    <td>Lista os heróis favoritos de um jogador</td>
    <td>-</td>
  </tr>
  <tr>
    <td>GET</td>
    <td><code>/heroes</code></td>
    <td>Lista heróis com paginação, filtro e ordenação</td>
    <td><code>{ "page": 1, "pageSize": 10, "filter": "tank", "sortBy": "name", "sortOrder": "asc" }</code></td>
  </tr>
</table>
<h3>Parâmetros de Paginação, Filtro e Ordenação</h3>
<ul>
  <li><strong>page</strong>: Página atual (opcional, padrão: 1).</li>
  <li><strong>pageSize</strong>: Número de itens por página (opcional, padrão: 10).</li>
  <li><strong>filter</strong>: Filtro para a função do herói (opcional, valores: <code>tank</code>, <code>dps</code>, <code>support</code>).</li>
  <li><strong>sortBy</strong>: Campo para ordenação (opcional, valores: <code>name</code>, <code>role</code>).</li>
  <li><strong>sortOrder</strong>: Direção da ordenação (opcional, valores: <code>asc</code>, <code>desc</code>, padrão: <code>asc</code>).</li>
</ul>
<h3>Exemplo de Requisição com Filtro, Paginação e Ordenação</h3>
<pre><code>curl -X GET "http://localhost:3000/heroes?page=1&pageSize=10&filter=tank&sortBy=name&sortOrder=asc"</code></pre>
<p><strong>Resposta:</strong></p>
<pre><code>{
  "page": 1,
  "pageSize": 10,
  "total": 50,
  "heroes": [
    {
      "id": 1,
      "name": "Reinhardt",
      "role": "tank"
    },
    {
      "id": 2,
      "name": "Winston",
      "role": "tank"
    }
  ]
}</code></pre>
