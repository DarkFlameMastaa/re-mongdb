
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    minger:String,
    content: String,
    createTime: {
        type: Date,
        default: Date.now
    }
  }
)

module.exports = mongoose.model('haoming', PostSchema);
