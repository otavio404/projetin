const srvConfig = require("../enviroment/serverconfig.json")

const express = require("express")
const handlebars = require("express-handlebars")
const path = require("path")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.engine("handlebars", handlebars.engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")
app.set("views", path.join(__dirname) + "/views/")

app.use(express.static(path.join(__dirname, "../public/")) )

app.get("/", (req, res) => {
    res.render("home")
})

app.listen(srvConfig.port, () => {
    console.log(`Server listening at port ${srvConfig.port} and now you can access at navigator using this following URL:\nhttp://localhost:${srvConfig.port}`)
})