import app from './app.js';
import dotenv from 'dotenv';

dotenv.config({path:'./config.env'});

const port=process.env.PORT||3001;
app.listen(port,()=>{
    console.log(`App is running on ${port}`)
})

