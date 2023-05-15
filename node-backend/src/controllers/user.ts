import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertUser, getAllUsers } from "../services/user";


export const postUser = async (req:Request, res : Response) => {
    try{
        const responseUser = await insertUser(req.body)
        res.json(responseUser);
    }catch(error : any){
        handleHttp(res, error.message)
    }
}


export const getUsers = async (req:Request, res : Response) => {
    try{
        const responseUsers = await getAllUsers(req.body)
        res.json(responseUsers);
    }catch(error: any){
   
        handleHttp(res, error.message);
    }
}