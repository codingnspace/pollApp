var mongoose = require('mongoose');
var crypto = require('crypto');

var UserSchema = new mongoose.Schema ({
  username: {required:true, type:String, lowercase:true, trim:true, unique: true},
  email: {required:true, type:String, lowercase:true, trim:true, unique: true},
  passwordHash: String,
  salt: String,
});
UserSchema.methods.setPassword = function(password){
  console.log(password);
  this.salt = crypto.randomBytes(16).toString('hex');
  console.log(this.salt);
  this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000,64).toString('hex');
  console.log(this.passwordHash);
};
mongoose.model('User', UserSchema);
