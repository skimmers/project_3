const router = require('express').Router();
const { Favorite, Station, User } = require('../../models');


// get route for all Favorite data

router.get('/', async (req, res) => {

    try {
        const favoriteData = await Favorite.findAll({
            include: [{ model: Station }],
          
            where: {
                user_id: req.session.user_id,
            },

        });
        const favorited = favoriteData.map(station => station.get({plain: true})); 
        console.log(favorited);
        res.status(200).json(favorited);
    } catch (err) {
        //res.redirect("login");
    }
});

router.get('/:user_id', async (req, res) => {
    try {
        const userFave = await Favorite.findByPk(req.params.user_id, {
            include: [{ model: Station, through: Favorite, as: 'user_favorite' }]

        })
        if (userFave) {
            res.status(404).json({ message: 'What Favorites??' });
            return;
        }
        res.status(200).json(userFave);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create a record
router.post('/', async (req, res) => {
    console.log(req.body);
    console.log(req.session.user_id);

    const newFavorite = {
        user_id: req.session.user_id,
        title: req.body.title,
        power: req.body.power,
        voltage: req.body.voltage,
        connectionType: req.body.connectionType,
        address: req.body.address,
        city: req.body.city,
        access: req.body.access,
        stationSite: req.body.stationSite,
        isFavorite: req.body.isFavorite
    }

    console.log(newFavorite);
    try {
        const favoriteData= await Favorite.create(newFavorite);
        res.status(200).json(favoriteData)
    } catch (err) {
        res.status(400).json(err);
    }
});

// delete a record
router.delete('/:id', async (req, res) => {
    try {
        const favoriteData = await Favorite.destroy({
            where: { id: req.params.id }
        });
        if (!favoriteData) {
            res.status(404).json({ message: "No favorite/user combo exists with that id" });
            return;
        }
    } catch (err) {
        res.status(500), json(err);
    }
});

module.exports = router;