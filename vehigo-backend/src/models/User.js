const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required:function () {
      return this.auth_provider === 'email';
    } },
  firebase_uid:{type:String,required: function () {
      return this.auth_provider === 'google';
    } },
  auth_provider:{type:String,enum:['google','email'],required:true},
  phone_number: { type: String },
  address: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
