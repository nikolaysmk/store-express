import express from 'express';
import prdocut from './data/products.json';

const app: express.Application = express();
const PORT: number = 3333;

app.post('/products', (req, res) => {
  prdocut.push(req.body);
  res.json(prdocut);
});

app.put('/products/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const updateProduct = prdocut.map((item) => {
    if (item.id === id) {
      return { ...item, ...body };
    }
    return item;
  });
  res.json(updateProduct);
});

app.delete('/products/:id', (req, res) => {
  const id = req.params.id;
  const updateProduct = prdocut.filter((item) => item.id !== id);
  res.json(updateProduct);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
