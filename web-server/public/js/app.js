//This is clientside javascript

const weatherform = document.querySelector("form")
const search = document.querySelector("input")
const msg1 = document.querySelector('#msg-1')
const msg2 = document.querySelector('#msg-2')

weatherform.addEventListener('submit', (e)=>{
    e.preventDefault()
   const location = search.value
   let url = 'http://localhost:3000/weather?address='+location
   fetch(url).then( (response,error) => {
    
    response.json().then((data)=>{
        if(data.error){
            return msg2.innerText= data.error
        }
        msg1.innerText = data.address +"\n" + data.forecast
    })
})
})

