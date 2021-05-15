const router = require('express').Router();
const { User, Comment, Station } = require('../../models');
const withAuth = require('../../utils/auth');

// *** Put withAuth back in once we know the routes are good to go
// POST route to handle creating a new comment
router.post('/', withAuth, async (req, res) => {
  try {
    const createComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id
    });
    
    const commentData = createComment.get({ plain: true });
    res.json(commentData);

    res.render('profile', {
      ...commentData
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT route to handle editing an existing comment
router.put('/:id', withAuth, async (req,res) => {
  try {
    const editComment = await Comment.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    });

    if (!editComment) {
      res.status(400).json({ message: 'No comment found with this ID' });
      return;
    }

    res.status(200).json(editComment);

  } catch (err) {
    res.status(500).json(err);
  }
})

// POST route to handle creating a new comment
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deleteComment = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    });

    if (!deleteComment) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    // res.render('profile');
    res.status(200).json(deleteComment);

  } catch (err) {
    res.status(500).json(err);
  }
});

  module.exports = router;