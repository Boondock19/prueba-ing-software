import { Router } from "express";
import {postUser, getUsers} from "../controllers/user"
export const router = Router();

router.post("/",postUser);

router.get("/", getUsers )


