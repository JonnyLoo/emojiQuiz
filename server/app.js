const express = require('express');
const app = express();
const router = require('./routes/index');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(router);
app.listen(process.env.PORT || 8888, () => console.log('connected on port 8888'));
