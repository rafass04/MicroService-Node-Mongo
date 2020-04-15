const mongoose = require('mongoose');
var express = require('express');

mongoose
  .connect(
    'mongodb://userSVX:0dVmNWt5POqaB23X@172.21.245.49:27017/sampledb',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  module.exports = mongoose;
