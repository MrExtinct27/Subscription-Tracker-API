import mongoose from 'mongoose'
import { DB_URI, NODE_ENV } from '../config/env.js'

if(!DB_URI)
{
    throw new Error('Please provide valid DB URL')
}

const connectToDatabase = async()=>{
    try {
        await mongoose.connect(DB_URI)
        console.log(`Connected to Db in ${NODE_ENV} mode`)
        
    } catch (error) {
        console.error("error connecting to Db ", error)
        process.exit(1)
    }
}

export default connectToDatabase
