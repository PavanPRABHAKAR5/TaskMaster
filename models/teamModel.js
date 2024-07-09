

module.exports=(sequelize, DataTypes)=>{
    let Team = sequelize.define('team', {
        name : {
            type: DataTypes.STRING,
            allowNull : false
        }
    })




    return Team
}