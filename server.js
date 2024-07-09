const app = require('./app');




const PORT = process.env.PORT || 8080

app.listen(PORT, (err)=>{
    if(err){
        console.log("Error in starting the server")
    }else{
        console.log(`Server is running in ${PORT}`)
    }
})