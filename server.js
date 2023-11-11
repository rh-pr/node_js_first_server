const express = require ('express');
const bodyParser = require ('body-parser');
const path = require ('path');

const friendRouter = require ('./routes/friends.router');
const messagesRouter = require ('./routes/messages.router');

const app = express ();

app.set ('view engine', 'hbs');
app.set ('views', path.join (__dirname, 'views'));

const PORT = 3000;

app.use ((req, res, next) => {
  const start = Date.now ();
  next ();
  const delta = Date.now () - start;
  console.log (`${req.method} ${req.baseUrl} ${req.url} with time ${delta}`);
});

app.use ('/site', express.static (path.join (__dirname, 'public')));

// use body parser for reading body content in post request
app.use (bodyParser.json ());
app.use (
  bodyParser.urlencoded ({
    extended: true,
  })
);

app.get ('/', (req, res) => {
  res.render ('index', {
    title: 'My friend are very clever',
    caption: "Let's make a party!",
  });
});
//created router
app.use ('/friends', friendRouter);
app.use ('/messages', messagesRouter);

app.listen (PORT, () => {
  console.log ('listening server...');
});
