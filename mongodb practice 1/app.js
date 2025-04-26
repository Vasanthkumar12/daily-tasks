import express from 'express'
import dotenv from 'dotenv'
import connectDb from './Server/db.js'
import todoRoutes from './Routes/todoRoutes.js'

dotenv.config()
connectDb()
const app = express()
app.use(express.json())
app.use('/', todoRoutes)

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is started on http//:localhost:${port}`)
})
