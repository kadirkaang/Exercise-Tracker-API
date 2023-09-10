const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true, // Girişlerin başındaki ve sonundaki boşlukları temizler
  },
  logs: [{
    description: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      required: false
    }
  }],
  count: {
    type: Number,
    required: false,
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
