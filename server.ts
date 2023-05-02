import express from 'express';
import prdocut from './data/products.json';

const app: express.Application = express();
const PORT: number = 3333;

app.get('/', (req, res) => {
  res.json(prdocut);

  res.end();
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
