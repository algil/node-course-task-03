'use strict';

const express = require('express');
const users = require('../data');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('users', { title: 'Users', users });
});

router.post('/', (req, res) => {
  users.push(req.body.user);
  res.status(302).redirect('/users');
});

module.exports = router;
