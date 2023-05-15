import {Op} from 'sequelize'
import User from "../models/user"
import { UsertInput, UserOuput, GetAllUser} from "../models/user"


export const insertUser = async (user:UsertInput) : Promise<UserOuput> =>{
    const responseInsert = await User.create(user)
    return responseInsert;
}

export const getAllUsers = async (filters?: GetAllUser) : Promise<UserOuput[]> =>{
    const responseUsers = await User.findAll({
        where: {
            ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
    return responseUsers;
}