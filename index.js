import express from "express"
import mongoose from "mongoose"
import router from "./router.js"
import dotenv from "dotenv"
import fileUpload from "express-fileupload"
dotenv.config()

const PORT = process.env.PORT || 8000
const DB_URL = "mongodb+srv://snowingSnake:7yzaQmwteF2BOn62@cluster0.ew2bga7.mongodb.net/?retryWrites=true&w=majority"

const app = express()
app.use(express.json())
app.use(express.static("static"))
app.use(fileUpload({}))
app.use("/api", router)

app.get("/", (req, res) => {
        res.status(200).json("Server GET is working...")
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => {
            console.log("START on PORT " + PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

startApp()
