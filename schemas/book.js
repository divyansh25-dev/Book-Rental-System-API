const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author:{
    type: String,
    required: true
  },
  image : {
    type: String,
    required: true
  },
  isRented: {
    type: Boolean,
    required: true,
  }
})

module.exports = mongoose.model('bookSchema', bookSchema)
