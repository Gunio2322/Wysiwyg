const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  // _id: {
  //   type: String,
  //   unique: false,

  //     },
        
  text: {
    type: String,
    required: false,
    // sparse: true,
    // unique: true,
    
 
    
  },


  key: {
    type: String,
    unique: false,
  },
  type: {
    type: String,
    unique: false,
  },
  depth: {
    type: Number,
sparse: false,
  
  }
});

const BlogModel = mongoose.model("Draft", BlogSchema);
module.exports = BlogModel;
