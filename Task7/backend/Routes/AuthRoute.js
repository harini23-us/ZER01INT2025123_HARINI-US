import express from 'express';
import  signup  from '../Controllers/AuthControllers/SignupController.js';
import  Login from '../Controllers/AuthControllers/LoginController.js';


const AuthRoute = express.Router();

// Use POST for signup and login
AuthRoute.post("/signup", signup);
AuthRoute.post("/login", Login);

export default AuthRoute;
