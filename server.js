const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configurações
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rota GET para exibir a página inicial
app.get('/', (req, res) => {
  res.render('index');
});

// Rota POST para receber o formulário e redirecionar
app.post('/submit', (req, res) => {
  const { name } = req.body;
  if (!name || name.trim() === '') {
    return res.redirect('/'); // Redireciona de volta se o nome for inválido
  }
  res.redirect(/success?name=${encodeURIComponent(name)});
});

// Rota GET para exibir a página de sucesso
app.get('/success', (req, res) => {
  const { name } = req.query;
  res.render('success', { name });
});

// Inicialização do servidor
app.listen(port, () => {
  console.log(Servidor rodando na porta ${port});
});
