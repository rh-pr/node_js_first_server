const path = require ('path');

function getMessages (req, res) {
  res.render ('messages', {
    title: 'Hallo friend',
    friend: 'Alber',
  });
  // res.sendFile (
  //   path.join (__dirname, '..', 'public', 'images', 'firstImg.jpeg')
  // );
}

function postMessage (req, res) {
  res.send ('<ul><li>Hello, Ruslana</li></ul>');
}

module.exports = {
  getMessages,
  postMessage,
};
