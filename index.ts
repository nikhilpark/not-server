import express,{Request,Response} from 'express'
 const app:express.Application = express()
const port = 80;
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
})

app.get('/',(req:Request,res:Response)=>{
    res.send('This app actually worrks!')
})