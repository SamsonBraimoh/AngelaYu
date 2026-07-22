import express from 'express';

const app = express();

app.get("/", ( req, res) => {
    const day = new Date("November 29, 2025 11:00:00").getDay()
    let type = "a weekday"
    let adv = "it's time to work hard"
    
    if(day === 0 || day === 6){
        type = "the weekend"
        adv = "It's time to have some fun."
    }
    res.render("index.ejs", 
        {
            dayType: type,
            advice: adv
        })
})


app.listen(3000, ()=>{
    console.log("App running on port 3000");
})