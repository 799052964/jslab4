var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'lab4', message:'I have a big family. The name of it is Georgian College! Here are some of the ' +
  'most important family members!' });
});
router.get('/boshen', function(req, res, next) {
  res.render('boshen', { title: 'Boshen', message:'This page is for me. I am a computer programmer in georgian!' });
});
router.get('/rich', function(req, res, next) {
  res.render('rich', { title: 'Rich', message:'Rich is my favour teacher! Just like the father in the family.' });
});
router.get('/baisen', function(req, res, next) {
  res.render('baisen', { title: 'Baisen', message:'Baisen is my best friend! Just like the brother for me.' });
});
router.get('/david', function(req, res, next) {
  res.render('david', { title: 'David', message:'David is my best friend too! Also just like the brother for me.'});
});
module.exports = router;
