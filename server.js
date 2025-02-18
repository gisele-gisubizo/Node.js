import express from 'express';
const app=express();

app.get('/getresult',(req,res)=>{
    res.send("this is my first project of node js")
});


app.post('/postrequest', (req, res) => {
    res.send('Got a POST request')
  })

const PORT=5000;

app.listen(PORT,()=>{
    console.log(`the app is running on the port ${PORT}`);
    
})