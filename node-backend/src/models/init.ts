import User from './user';

export const dbinit = () =>{
    User.sync({ alter: true })
}

