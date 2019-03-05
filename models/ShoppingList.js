const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
  shoppingList: [{
    {
      
    }
  }]
});

module.exports = User = mongoose.model("users", UserSchema);
