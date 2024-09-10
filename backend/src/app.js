import express from 'express';
import cors from 'cors';
import route from './routes.js';

const app = express();
const port = 3000 || process.env.PORT;
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
  // credentials: true,
};
app.use(express.json());
app.use(cors(corsOptions));
app.use(route);

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
