'use strict';
import request from 'supertest';
import app from '../app/server';
import finish from './finish';

describe('articles-api', () => {
  it('post articles', (done) => {
    request(app)
      .post('/api/articles')
      .send({title: 'my-title', content: 'my-content'})
      .expect(201, finish(done));
  });
});
