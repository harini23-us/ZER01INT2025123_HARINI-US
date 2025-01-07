import express from 'express';
import AuthRoute from './Router/Authroute.js';

const app = express();

app.get("/", (req, res) => {
    res.send("Hi this is from server");
});
app.use("/auth",AuthRoute)




const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
