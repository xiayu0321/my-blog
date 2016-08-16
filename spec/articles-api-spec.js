'use strict';
import request from 'supertest';
import app from '../app/server';
import finish from './finish';
import {Article} from '../app/db/schema';

describe('articles-api', () => {
  beforeEach((done)=> {
    Article.find().remove(finish(done));
  });

  it('post articles', (done) => {
    request(app)
      .post('/api/articles')
      .send({title: 'my-title', content: 'my-content'})
      .expect(201, function (err, data) {
        Article.find(function (err, articles) {
          expect(articles.length).toEqual(1);
          const saved = articles[0];
          expect(saved.title).toEqual('my-title');
          expect(saved.content).toEqual('my-content');

          finish(done)(err);
        })
      });
  });
});
