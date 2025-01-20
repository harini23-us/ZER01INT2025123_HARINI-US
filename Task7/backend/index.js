import express from 'express';
import cors from 'cors';
import AuthRoute from './Routes/AuthRoute.js';

const app = express();

// Enable CORS for all origins (this allows requests from any origin)
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("jjfjf");
});

app.use("/auth", AuthRoute);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
