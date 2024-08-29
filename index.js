const express = require('express');
const app = express();
const port = 4000;
app.use(express.json())

app.get('/api/get',(req,res)=>{
     res.send({message:'CI/CD integration'})
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})