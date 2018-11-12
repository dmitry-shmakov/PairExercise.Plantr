const Sequelize = require('sequelize')
const {db} = require('./models')

db.sync({force: true})
    .then(()=> {
        console.log('Sync success');
    })
    .catch((reason)=> {
        console.log("Something is wrong: ", reason);
    })
    .finally(() => {
        db.close();
    })