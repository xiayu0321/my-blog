'use strict';
import express from 'express';
import _ from 'lodash';
import {Article} from '../db/schema';

const router = express.Router();

router.post('/', function (req, res, next) {
  const data = req.body;
  if (_.isEmpty(data)) {
    res.sendStatus(400);
  } else {
    console.log('--------- save');
    console.log(data);

    new Article(data).save(err => {
      console.log('-------- invoke saved');
      console.log('--- err ---');
      console.log(err);
      if (err) return next(err);
      console.log('--- send 201');
      res.sendStatus(201);
    });
  }
});

router.get('/', function (req, res, next) {
  Article.find((err, articles) => {
    if (err) return next(err);
    res.json(articles);
  });
});

export default router;
