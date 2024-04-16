import express from 'express';

const app = express();
const port = 3000;

const index = fs.readFileSync('public/index.html', 'utf8');
app.get('/', (req, res) => res.type('html').send(index));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
