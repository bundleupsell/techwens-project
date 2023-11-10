const express = require('express');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
const authenticateJWT = require('./middleware');
const apiRouter = require('./router');
const loginController = require('./controllers/loginController');
const app = express();
const port = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './public');


// Public routes
app.get('/', (req, res) => {
  res.render('login');
});
app.get('/dashboard', (req, res) => {
    res.render('dashboard');
 });
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());

 app.post('/login', (req, res) => {
    try {
      const token = loginController(req.body.username);
      res.json({ token: token });
    } catch (error) {
      console.error('Error in loginController:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
app.use('/api/v1/', authenticateJWT, apiRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
