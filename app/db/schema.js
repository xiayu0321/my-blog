import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  content: String
});

const Article = mongoose.model('Article', articleSchema);

export {
  Article
}
