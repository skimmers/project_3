const router = require('express').Router();
const { User, Comment, Search } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/signup', async (req, res) => {
  try {
    let userData = await User.findOne({ where: { email: req.body.email } });

    if (userData) {
      res
        .status(400)
        .json({ message: 'A user with this email already exists' });
      return;
    }

    userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'User created!' });
    });

  } catch (err) {
    if (err.errors && err.errors.length > 0) {
      console.log("ERROR!");
      const message = err.errors[0].message;
      //if we detect an array of errors, that must be from sequelize
      //send all of those back to the frontend so we can deal with the error messages     
      res.status(400).json({
        message
      });
      return;
    }

    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get('/authcheck', (req, res) => {
  if (req.session && req.session.logged_in) {
    res.json({ 
      logged_in: true,
      user_id: req.session.user_id
    });
  } else {
    res.json({ 
      logged_in: false
    });
  }
})

module.exports = router;
