const db = require('../models')


const Task  =  db.tasks


// 1. createTask

const createTask = async (req,res) =>{
    try{
        let data = {
            title:req.body.title,
            description:req.body.description,
            dueDate:req.body.dueDate,
            status:req.body.status
        }

        let task = await Task.create(data);
        res.status(200).send(task);
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

// 2. viewAllTask

const viewAllTask = async(req,res) =>{
    try{
        let tasks = await Task.findAll({});
        res.status(200).send(tasks)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

// 3. viewOneTask

const viewOneTask = async(req,res) =>{
    try{
        let id = req.params.id;
        let task = await Task.findOne({where:{id:id}});
        res.status(200).send(task)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

//4. updateTask

const updateTask = async(req,res) =>{
    try{
        let id= req.params.id;
        let task = await Task.update(req.body, {where:{id:id}});
        res.status(200).send(task)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

//5. deleteTask

const deleteTask = async(req,res) =>{
    try{
        let id = req.params.id
        await Task.destroy({where:{id:id}})
        res.status(200).send("Task deleted!")
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

// 



module.exports = {
    createTask,
    viewAllTask,
    viewOneTask,
    updateTask,
    deleteTask
}