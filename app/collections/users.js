// NOTE: this file is not needed when using MongoDB
var db = require('../config');
var User = require('../models/user');

var Users = new db.Collection();

Users.model = User;

module.exports = Users;

var hello = 'hello';
var helloAgain = 'blah';
var helloA = 'blah';