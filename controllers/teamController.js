const db = require('../models');


const Team = db.teams;
const User = db.users;


//1. createTeam

const createTeam = async(req,res)=>{
    try{
        let data = req.body
        let team = await Team.create(data);
        res.status(200).send('New team created')
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

// 2. Join team

const joinTeam = async(req,res)=>{
    try{
        let id = req.params.id
        let team = await Team.findByPk({where:{id:id}});
        if(!team) return res.status(400).send("No team found")
        
        let user = await User.findByPk({where:{id:req.user.id}});
        await team.addUser(user);
        res.json({ message: 'Joined team successfully' });
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports = {
    createTeam,
    joinTeam
}