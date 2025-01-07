import express from 'express';
import { Login, validation } from '../apiserver/Controller/SignupController.js';


const AuthRoute = express.Router();

AuthRoute.get("/validation", validation);
AuthRoute.get("/login", Login);

export default AuthRoute;


