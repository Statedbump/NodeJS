const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = "http://api.weatherstack.com/current?access_key=ee4d38fdd010a46e11fdb5ac062867bb&query="+latitude +","+longitude+"&units=f"
    request({url , json: true}, (error,{body})=>{
        if(error){
            callback('ERROR: Unable to connect to Weather Service',undefined)
        }else if(body.error){
            const _ = "ERROR: "+ body.error.info
            callback(_, url)
        }else{
            const curr = body.current
            callback(undefined, curr.weather_descriptions[0]+ ". It is currently " + curr.temperature +" degrees out. It feels like " + curr.feelslike + " degrees ")
        }
                
                
    })
}

module.exports=forecast