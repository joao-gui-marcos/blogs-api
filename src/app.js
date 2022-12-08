const express = require('express');
// const user = require('./controllers/user.controller');
const routes = require('./routes');
const validateJWT = require('./auth/validateJWT');
// ...

const app = express();

app.use(express.json());

const apiRoutes = express.Router();

apiRoutes.get('/user', validateJWT, routes.users.getAll);
apiRoutes.post('/user', routes.users.createUser);
apiRoutes.post('/login', routes.login);
apiRoutes.get('/user/:id', validateJWT, routes.users.getById);
apiRoutes.get('/categories', validateJWT, routes.categories.getAll);
apiRoutes.post('/categories', validateJWT, routes.categories.createCategory);
apiRoutes.get('/post', validateJWT, routes.posts.getAll);
apiRoutes.get('/post/:id', validateJWT, routes.posts.getById);

app.use(apiRoutes);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
//
