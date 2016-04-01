var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var mongoose = require('mongoose');

// var User = db.Model.extend({
//   tableName: 'users',
//   hasTimestamps: true,
//   initialize: function() {
//     this.on('creating', this.hashPassword);
//   },
//   comparePassword: function(attemptedPassword, callback) {
//     bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
//       callback(isMatch);
//     });
//   },
//   hashPassword: function() {
//     var cipher = Promise.promisify(bcrypt.hash);
//     return cipher(this.get('password'), null, null).bind(this)
//       .then(function(hash) {
//         this.set('password', hash);
//       });
//   }
// });

// user.string('username', 100).unique();
// user.string('password', 100);

// mongoose.com/docs/validation.html
// mongoosejs.com/docs/2.7.x/docs/schematypes.html
var userSchema = mongoose.Schema({
  username: {type: String, required: true, index: {unique: true}}, 
  password: {type: String}
});




module.exports = User;
