var db = require('../config');
var crypto = require('crypto');
var mongoose = require('mongoose');

// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function() {
//     this.on('creating', function(model, attrs, options) {
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });

// module.exports = Link;

var linkSchema = mongoose.Schema ({
  url: String, 
  baseUrl: String, 
  code: String,
  title: String, 
  visits: Number, 
  link: String
}); 


var Link = mongoose.model('Link', linkSchema);

linkSchema.methods.createShasum = function(url) {
  var shasum = crypto.createHash('sha1');
  shasum.update(url);
  return shasum.digest('hex').slice(0, 5);
};

//mogoosejs.com/docs/middleware.html
linkSchema.pre('save', function(next) {
  var newUrl = createShasum(this.url);
  this.code = code;
  next();
});

module.exports = Link;   
