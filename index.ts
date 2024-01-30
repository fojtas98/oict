import dotenv from 'dotenv'
dotenv.config()
import app from "./server/app"


const PORT = process.env.PORT
if(!PORT){
    console.log("Port is not defined")
    process.exit(1)
}

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})
