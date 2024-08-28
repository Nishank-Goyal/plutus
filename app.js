const express = require('express');
const app = express();

app.use(express.json());

app.use(express.static(__dirname+'/dist/plutus'))

app.get('/*',(req,res)=>{
    res.sendFile(__dirname+'/dist/plutus/index.html')
});



app.listen(4200,()=>console.log('Web running at 4200'))