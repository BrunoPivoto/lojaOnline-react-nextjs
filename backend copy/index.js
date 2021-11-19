import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index.js';
import cors from 'cors';

dotenv.config();


const app = express();
const port = 3308;

app.use(cors());
app.use(express.json())
app.use(router);

app.listen(port, () => {
  console.log(`Servidor ouvindo em http://localhost:${port}`)
})