import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
