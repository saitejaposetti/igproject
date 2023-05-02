import express from 'express'
import cors from 'cors'
import {db,connectToDB} from "./db.js"
const app = express()
app.use(express.json())

app.get('/login',async (req, res) => {
    const details = await db.collection('users').insertOne({
        username:req.params.username,
        password:req.params.password
    });
    res.json(details);
});


app.post('/i',async (req, res) => {
    const details = await db.collection('users').find({
        username:req.params.username,
        password:req.params.password
    });
    res.json(details);
});

connectToDB(()=>{
    app.listen(6000,()=>{
        console.log("Server Running At port 6000");
    })
})