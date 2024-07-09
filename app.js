const express = require('express');
const cors = require('cors');



const app = express();


var corOptions = {
    origin: 'https://localhost:8081'
}


//middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}))


const userRouter = require('./routes/userRouter');
const taskRouter = require('./routes/taskRouter');
const teamRouter = require('./routes/teamRouter')

app.use('/api/users', userRouter)
app.use('/api/task', taskRouter)
app.use('/api/team', teamRouter)


app.get('/', (req,res)=>{
    res.send("Working")
})



module.exports = app;