const router = require('express').Router();
const { Location, Traveller, Trip } = require('../models');

// travellers
router.get('/api/travellers', async (req, res) => {
    const travellerData = await Traveller.findAll({});
    res.json(travellerData);
})

router.post('/api/travellers', async (req, res) => {
    const travellerData = await Traveller.findAll({});
    res.json(travellerData);
})

router.get('/api/travellers/:id', async (req, res) => {
    const travellerData = await Traveller.findByPk(
        req.params.id, {
        include: [
            {
                model: Location,
                through: {
                    attributes: []
                }}]
    }
    );
    res.json(travellerData);
})

router.delete('/api/travellers/:id', async (req, res) => {
    const travellerData = await Traveller.destroy({
        where: {
            id: req.params.id
        }
    });
    res.json(travellerData);
})

// locations
router.get('/api/locations', async (req, res) => {
    const locationData = await Location.findAll({});
    res.json(locationData);
})

router.post('/api/locations', async (req, res) => {
    const locationData = await Location.create(req.body);
    res.json(locationData);
})

router.get('/api/locations/:id', async (req, res) => {
    const locationData = await Location.findByPk(
        req.params.id,
        {
            include: [{
                model: Traveller,
                through: Trip
            }]
        }
    );
    const location = JSON.parse(JSON.stringify(locationData));

    const updated = location.travellers.forEach(traveller => {
        delete traveller.trip;
        return traveller;
    });
    console.log(location);
    res.json(location);
})

router.delete('/api/locations/:id', async (req, res) => {
    const locationData = await Location.destroy({
        where: {
            id: req.params.id
        }
    });
    res.json(locationData);
})

// TRIPS
router.get('/api/trips', async (req, res) => {
    const tripData = await Trip.findAll({});
    res.json(tripData);
});

router.post('/api/trips', async (req, res) => {
    const tripData = await Trip.create(req.body);
    res.json(tripData);
});

router.delete('/api/trips/:id', async (req, res) => {
    const tripData = await Trip.destroy({
        where: {
            id: req.params.id
        }
    });
    res.json(tripData);
});

module.exports = router;
