import express from 'express'

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>")
    // console.log(req.rawHeaders)
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>My name is SamsonBraimoh</p>")
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact me</h1><p>samsonbraimoh@gmail.com</p>")
})

app.listen(port, ()=>{
    console.log(`server running on ${port}`)
})