import app from './app.js';
import dotenv from 'dotenv';
import wineRouter from './routers/wines.routes.js';

app.use('/wines', wineRouter);

//read environment variables
dotenv.config();

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})