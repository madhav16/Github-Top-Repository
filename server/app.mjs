
import express from 'express';
import cors from 'cors';
import apiRouter from './routes/api.mjs';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// API routes
app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
