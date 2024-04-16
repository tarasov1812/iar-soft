import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// const index = fs.readFileSync('index.html', 'utf8');
// app.get('/', (req, res) => res.type('html').send(index));

app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
