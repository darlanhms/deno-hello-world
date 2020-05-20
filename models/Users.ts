import db from "../db.ts";
import { user } from "../controllers/interfaces.ts"

const users = db.collection("Users");

export const createUser = (user:user):Promise<user> => {
    return new Promise((resolve, reject) => {
        users.insertOne(user).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

export const getUsers = ():Promise<user[]> => {
    return new Promise((resolve, reject) => {
        users.find().then(users => {
            resolve(users);
        }).catch(err => {
            reject(err);
        })
    })
}

export default users;