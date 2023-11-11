const express = require ('express');

const friendsController = require ('../controllers/friends.controller');

const friendRouter = express.Router ();

friendRouter.use ((req, res, next) => {
  console.log ('user ip: ', req.ip);
  next ();
});

friendRouter.post ('/', friendsController.postFriend);
friendRouter.get ('/', friendsController.getFriends);
friendRouter.get ('/:friendId', friendsController.getFrined);

module.exports = friendRouter;
