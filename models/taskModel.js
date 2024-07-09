module.exports =(sequelize, DataTypes)=>{
    const Task = sequelize.define('task',{
        title:{
            type : DataTypes.STRING,
            allowNull : false
        },
        description : {
            type : DataTypes.TEXT,
            allowNull: false
        },
        dueDate : {
            type : DataTypes.DATE,
            allowNull: false
        },
        status: {
            type : DataTypes.STRING,
            defaultValue : 'pending'
        }
    })

    return Task
}