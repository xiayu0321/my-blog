import express from 'express';
import articlesApi from './articles';

const router = express.Router();

router.use('/articles', articlesApi);

export default router;
