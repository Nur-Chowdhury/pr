import dotenv from 'dotenv';

import express from 'express';
import connectToDatabase from './database.js';

//routes
import productRoutes from './routes/productRoutes.js';


dotenv.config();
connectToDatabase();
const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.use('/api/products', productRoutes);


app.listen(port, ()=>{
    console.log(`listening at port: ${port}`);
})