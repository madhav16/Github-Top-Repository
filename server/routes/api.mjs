

import express from 'express';
import { getPopularRepositories } from '../controllers/githubController.mjs';

const router = express.Router();

router.get('/repositories', getPopularRepositories);

export default router;
