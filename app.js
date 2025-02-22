import express from 'express'
import { PORT } from './config/env.js'

import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'
import subRouter from './routes/subscription.routes.js'
import connectToDatabase from './database/mongodb.js'
import cookieParser from 'cookie-parser'
import arcjetMiddleware from './middleware/arcjet.middleware.js'
import workflowRouter from './routes/workflow.routes.js'

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(arcjetMiddleware)

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter)
app.use('/api/v1/subscriptions',subRouter)
app.use('/api/v1/workflows',workflowRouter)


app.get('/', (req,res)=>{
    res.send("Welcome to SubDub")
})

app.listen(PORT, async ()=>{
    console.log(`Your server is running on http://localhost:${PORT}`)
    await connectToDatabase()
})

export default app;