import { Document } from "mongodb"
import { connectToDatabase } from "./database/db"
import User from "./database/models/User"
import {User as UserType} from '@/types'

export async function createUser(userData: UserType){
    try{
        await connectToDatabase() 
        const newUser: Document = await User.create(userData)
        return newUser
    }catch(err: unknown){
        if(err instanceof Error){
            console.log(err.message)
        }
    }
}