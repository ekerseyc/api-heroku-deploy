const Location = require('./location');
const Traveller = require('./traveller');
const Trip = require('./trip');

// Relationships aka Associations
Location.belongsToMany(Traveller, {
  through: {
    model: Trip,
    unique: false
  },
  });

Traveller.belongsToMany(Location, {
  through: {
    model: Trip,
    unique: false
  },
  })

Trip.belongsTo(Location, {
  foreignKey: 'location_id'
});

Trip.belongsTo(Traveller, {
  foreignKey: 'traveller_id'
});

module.exports = { Location, Traveller, Trip };