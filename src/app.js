'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index.routes');
const usersRoutes = require('./routes/users.routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'pug');
app.set('views', 'src/views');

app.use(indexRoutes);
app.use('/users', usersRoutes);

app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

app.listen(3000, () => {
  console.log('Listen on port 3000.');
  console.log('http://localhost:3000');
});
