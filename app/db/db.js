import mongoose from 'mongoose';

module.exports = {
  connect: function () {
    mongoose.connect('mongodb://localhost/my-blog-demo');
  },
  close: function () {
    mongoose.connection.close();
  }
}
