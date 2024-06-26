import { Router } from "express";
import { login } from "../controllers/auth";

const route = Router();

route.post("/login", login);

export default route;
