const dbConfig = require('../config/dbConfig');



const {Sequelize, DataTypes} = require('sequelize');



const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect : dbConfig.dialect,
        operatorsAliases: false,

        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log("Connected...")
})
.catch((err)=>{
    console.log('Error' + err)
})


const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require('./taskModel.js')(sequelize, DataTypes)
db.teams = require('./teamModel.js')(sequelize, DataTypes)
db.users = require('./userModel.js')(sequelize, DataTypes)

db.sequelize.sync({force:false})
.then(()=>{
    console.log('yes re-sync done!')
})


db.tasks.belongsTo(db.users, { as: 'assignee' });

db.teams.belongsToMany(db.users, { through: 'TeamMembers' });
db.users.belongsToMany(db.teams, { through: 'TeamMembers' });
db.teams.hasMany(db.tasks);

module.exports = db