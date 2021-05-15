const router = require('express').Router();
const { User, Search, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const stationData = await Search.findAll({
            include: [
                { model: Comment },
                { model: User,
                    exclude: {
                        attributes: ['password']
                    },
                },
            ],
        });

        const allStations = stationData.map(station => station.get({ plain: true }));
        res.status(200).json(allStations);

        res.render('results', allStations);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
