import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import errorMiddleware from './Middlewares/error-middleware';
import cookieParser from 'cookie-parser';

// Routers
import mainRouter from './Routes/mainRouter';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(cors()); // TODO: Разобраться что это
app.use(express.json()); // TODO: Разобраться что это
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); // TODO: Разобраться что это
app.use('/api', mainRouter);
app.use(errorMiddleware);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        app.listen(port, () => {
            console.log(`App listening on port ${port}`)
        });
    } catch (e) {
        console.log(e);
    }
}

start();