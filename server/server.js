// const baseURL=`https://api.openweathermap.org/data/2.5/weather?zip=84043&appid=f456589e9ec829c258ad97423b99d975` 

const express = require('express')
const app = express()

app.use(express.json())


const zipCode = () =>{

axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=84043&appid=f456589e9ec829c258ad97423b99d975`)
.then(res => {
    console.log(res.data)
  })
  .catch(error => {
    console.log(error)
})
}
zipCode()

button.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?zip=84043&appid=f456589e9ec829c258ad97423b99d975') 

})

app.listen(4000, () => console.log(`up on 4000`))
