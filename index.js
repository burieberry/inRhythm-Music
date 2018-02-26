const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/public', express.static(path.join(__dirname, './public')));
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')));
app.use('/dist', express.static(path.join(__dirname, './dist')));

app.get('/*', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(err.status || 500).send(err);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}.`));
