const express = require('express')
const path = require('path')
const hbs= require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
//Define Paths for Express Configs
const public = path.join(__dirname,'../public')
const viewsPath =  path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')


const app = express()
//Setup handlebars and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup Static directory to serve
app.use(express.static(public))

//GETS
app.get('', (req,res)=> {
    res.render('index',{
        title: "Weather App",
        name: "Luis"
    })
})
app.get('/about', (req,res)=> {
    res.render('about',{
        title: "About Me",
        name: "Luis Cintron"
    })
})
app.get('/help', (req,res)=> {
    res.render('help',{
        title: "Help",
        name:"Luis Cintron",
        helpMessage: "You have encounter a problem here is how we can help...",
    })
})
app.get('/weather', (req, res)=>{ //req = request : res = response
    if(!req.query.address){
        return res.send({
            error: "your must provide an Address"
        })
    }
    geocode(req.query.address,(error,{latitude,longitude, location}= {}) => {
        if(error){
            return res.send({
                error
            })
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return res.send({
                    error
                })
            }
            res.send({
                address: location,
                forecast:forecastData
            })
          })
    
    })

    
})
//start query Strings using ? and to separate queryes = &
app.get('/product', (req,res)=>{
    if(!req.query.search){
        return res.send({
            error: "your must provide a search term"
        })
       

    }
    console.log(req.query.search)
    res.send({
        product: []
    })

})
app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:"404",
        name: "Luis Cintron",
        type:"Error: Help",
        message:"Article Not Found"
    })

})

app.get('*',(req,res)=> { //Wildcard * anything that hasnt been mathched
    res.render('404',{
        title:"404",
        name: "Luis Cintron",
        type: "404 ",
        message:"PAGE NOT FOUND"
    })
})
app.listen(3000, () => {
    console.log('server is up at port 3000')
}) 