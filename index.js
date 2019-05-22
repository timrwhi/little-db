const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({ type: '*/*' }));

const db = {};

app.get('/', (req, res) => {
  res.type('text/html');
  res.send(`
    <h1>Endpoints:</h1>
    <pre>GET    /comments</pre>
    <pre>GET    /comments/:id</pre>
    <pre>POST   /comments</pre>
    <pre>DELETE /comments/:id</pre>
  `);
});

app.get('/comments', (req, res) => {
  const comments = Object.values(db);
  res.send(comments);
});

app.get('/comments/:id', (req, res) => {
  const comment = db[req.params.id];
  if (!comment) res.sendStatus(404);
  res.send(comment);
});

app.post('/comments', (req, res) => {
  const post = req.body;
  if (!post || !post.id) res.sendStatus(400);
  db[post.id] = post;
  res.send(post);
});

app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  if (!db[id]) res.sendStatus(404);
  delete db[id];
  res.send(db);
});

const port = process.env.NODE_ENV === 'development' ? 3000 : undefined;
app.listen(
  port,
  () => port && console.log(`\nRunning on http://localhost:${port}`)
);
