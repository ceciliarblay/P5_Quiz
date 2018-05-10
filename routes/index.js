var express = require('express');
var router = express.Router();
const {models} = require("../models");
const sequelize = require("sequelize");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET credits page. */
router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'Créditos' });
});

/* GET quizzes page. */
router.get('/quizzes', function(req, res, next) {
  models.quiz.findAll().
  then(quizzes=>{
  res.render('quizzes', { quizzes, title: "Quizzes" });})
});

module.exports = router;
