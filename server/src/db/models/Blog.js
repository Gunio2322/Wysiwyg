const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  // _id: {
  //   type: String,
  //   unique: false,

  //     },
        
  // text: {
  //   type: String,
  //   required: false,
 
  // },
  _id: {
    type: String,
    unique: false,

      },
        
  title: {
    type: String,
    required: false,
    // sparse: true,
    // unique: true,
    
 
    
  },
  slug: {
      type: String,
      // required: [false, "Please provide a title"],
      // unique: true,
      // minlength: [4, "Please provide a title least 4 characters "],
  },


  content: {
    type: String,
    unique: false,
  },
  author: {
    type: String,
    unique: false,
  },
  date: {
    type: Date,
sparse: false,
  
  }

});

const BlogModel = mongoose.model("Draft", BlogSchema);
module.exports = BlogModel;
