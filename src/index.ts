import express, {Request,Response} from 'express'
const app = express();
const port = 3000;

app.use(express.json());

// base Route
app.get('/',(req: Request, res: Response)=>{
    res.send("Hello, TypeScript with express!");
});


// Start the server
app.listen(port,()=>{
    console.log(`Server listening on <http://localhost>:${port}`)
})
