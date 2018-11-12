const Sequelize = require('sequelize')

const db = new Sequelize('postgres://localhost:5432/plantr')

const Gardener = db.define('gardeners', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

const Plot = db.define('plots', {
    size: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    shaded: {
        type: Sequelize.BOOLEAN
    }
});

const Vegetable = db.define('vegetables', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false
    },
    planted_on: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = { db, Gardener, Plot, Vegetable };

Gardener.hasOne(Plot);
Plot.belongsTo(Gardener);
Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'});
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'});
Gardener.belongsTo(Vegetable, {as: 'fav_veg'});