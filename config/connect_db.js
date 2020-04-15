const mongoose = require('mongoose');
var express = require('express');

mongoose
  .connect(
    'mongodb://userSVX:ev5cIFttSfID0iNq@172.21.245.49:27017/sampledb',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  module.exports = mongoose;
